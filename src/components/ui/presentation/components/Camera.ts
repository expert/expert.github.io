import { type Some, isNone, Option, some } from './../../../../lib/functional/option';
import * as THREE from 'three'
import gsap from 'gsap';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import CameraData from '@/components/ui/presentation/data/camera.json'
import { none } from '@/lib/functional/option';

type Point3D = {
  x: number,
  y: number,
  z: number
}
type CameraStep = {
  position: Point3D,
  lookAt: Point3D
}
type CameraInfo = {
  getStep: (step: number) => Option<CameraStep>
}

const cameraInfo = (data: CameraStep[]): Option<CameraInfo> => {
  if(!Array.isArray(data)) {
    return none
  }
  return some({
    getStep: (step: number) => {
      return some(data[step]) ?? none
    }
  })
}

const createGUI = function(camera: THREE.PerspectiveCamera, gui: GUI): void {
  const cameraParams = {
    positionX: camera.position.x,
    positionY: camera.position.y,
    positionZ: camera.position.z,
    lookAtX: 0,
    lookAtY: 0,
    lookAtZ: 0,
    fov: camera.fov, // Field of view
    aspect: camera.aspect, // Aspect ratio
    near: camera.near, // Near plane
    far: camera.far,   // Far plane
  };
  // Update camera parameters
  const updateCamera = () => {
    camera.position.set(cameraParams.positionX, cameraParams.positionY, cameraParams.positionZ);

    // Update the camera frustum parameters
    camera.fov = cameraParams.fov;
    camera.aspect = cameraParams.aspect;
    camera.near = cameraParams.near;
    camera.far = cameraParams.far;

    // Update camera projection matrix after changing FOV, aspect, near, or far
    camera.updateProjectionMatrix();

    // Update where the camera is looking
    const lookAtTarget = new THREE.Vector3(cameraParams.lookAtX, cameraParams.lookAtY, cameraParams.lookAtZ);
    camera.lookAt(lookAtTarget);
  };

  // GUI controls for camera position
  gui.add(cameraParams, 'positionX', -100, 100).onChange(updateCamera).name('Position X');
  gui.add(cameraParams, 'positionY', -100, 100).onChange(updateCamera).name('Position Y');
  gui.add(cameraParams, 'positionZ', -100, 100).onChange(updateCamera).name('Position Z');

  // GUI controls for camera lookAt target
  gui.add(cameraParams, 'lookAtX', -100, 100).onChange(updateCamera).name('LookAt X');
  gui.add(cameraParams, 'lookAtY', -100, 100).onChange(updateCamera).name('LookAt Y');
  gui.add(cameraParams, 'lookAtZ', -100, 100).onChange(updateCamera).name('LookAt Z');

  // GUI controls for camera frustum (FOV, aspect ratio, near and far clipping planes)
  gui.add(cameraParams, 'fov', 1, 180).onChange(updateCamera).name('Field of View');
  gui.add(cameraParams, 'aspect', 0.1, 4).onChange(updateCamera).name('Aspect Ratio');
  gui.add(cameraParams, 'near', 0.1, 50).onChange(updateCamera).name('Near Plane');
  gui.add(cameraParams, 'far', 50, 2000).onChange(updateCamera).name('Far Plane');
  
}

const createCameraPerspective = function(): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 2000 );

  camera.position.z = 345;
	camera.position.y = 100
	camera.lookAt(new THREE.Vector3(0, 0, 0))

  return camera
}

const cameraManager = (steps: Option<CameraInfo>, movement: ReturnType<typeof movementCamera>) => {
  let currentStep = 0
  const data = steps

  return {
    animationState: 'start',
    movement,
    setCurrentStep: (step: number) => {
      currentStep = step
    },
    getStep(){
      return currentStep
    },
    getStepInfo() {
      if(!isNone(data)) {
        return data.value.getStep(currentStep)
      }
      return none
    }
  }
}

const initializeCamera = (
  scene: THREE.Scene, 
  renderer: THREE.WebGLRenderer,
  panelGUI: GUI
): { 
  camera: THREE.PerspectiveCamera,
  manager: ReturnType<typeof cameraManager>
}=> {
	
  const camera = createCameraPerspective()
	const controls = new OrbitControls( camera, renderer.domElement );
  const cameraSteps = cameraInfo(CameraData)
  const cameraFlow = movementCamera(camera, controls)

  const manager = cameraManager(cameraSteps, cameraFlow)
  const eventListener = keyboardListeners(manager)
  

  createGUI(camera, panelGUI)

  return { camera, manager }
}
const animateCamera = (
  { component, renderer, scene} : { component: {camera: THREE.PerspectiveCamera, manager: any}, renderer: THREE.WebGLRenderer, scene: THREE.Scene} , 
  time: number
): void => {
  // Create a target distance from the camera to calculate the lookAt point
  // const distance = 20; // Distance

  // // Get the camera's world direction (a normalized vector)
  // const cameraDirection = new THREE.Vector3();
  // component.camera.getWorldDirection(cameraDirection);

  // // Calculate the lookAt position based on the camera's position and direction
  // const lookAtPosition = new THREE.Vector3();
  // lookAtPosition.copy(component.camera.position).add(cameraDirection.multiplyScalar(distance));

  renderer.render( scene, component.camera );
}

const movementCamera = (camera: THREE.PerspectiveCamera, controls: OrbitControls) => {
  const targetPosition = { x: 10, y: 10, z: 10 };  // The target position
  const targetLookAt = { x: 0, y: 0, z: 0 };       // The target lookAt

  return () => {
    gsap.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: 2,  // Animation duration in seconds
      ease: "power1.inOut",  // Easing function for smooth transition
      onUpdate: () => {
        // Update camera lookAt (this could also be animated separately)
        controls.target.set(targetLookAt.x, targetLookAt.y, targetLookAt.z);
        controls.update();
      }
    });
  }
}

const keyboardListeners = (manager: ReturnType<typeof cameraManager>) => {
  const stepKeys = [0,1,2,3,4,5].map(v => v.toString())
  window.addEventListener('keypress', (e: KeyboardEvent) => {
    const foundIndex = stepKeys.indexOf(e.key)
    if (foundIndex === -1) {
      return
    }
    if (manager.getStep() === foundIndex) {
      return
    }
    manager.setCurrentStep(foundIndex)
    manager.animationState = 'update'
    manager.movement()
    console.log(manager.getStep())
  })
}

export { initializeCamera, animateCamera }

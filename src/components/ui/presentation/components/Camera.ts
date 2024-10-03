import {  isNone, Option, some } from '@/lib/functional/option';
import * as THREE from 'three'
import gsap from 'gsap';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import CameraData from '@/components/ui/presentation/data/camera.json'
import { none } from '@/lib/functional/option';
import { useJourneyStore } from '@/stores/journey';
import { type StoreGeneric, storeToRefs } from 'pinia';
import { watch } from 'vue';

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
      return data[step] ? some(data[step]) : none
    }
  })
}

// const createGUI = function(camera: THREE.PerspectiveCamera, gui: GUI): void {
//   const cameraParams = {
//     positionX: camera.position.x,
//     positionY: camera.position.y,
//     positionZ: camera.position.z,
//     lookAtX: 0,
//     lookAtY: 0,
//     lookAtZ: 0,
//     fov: camera.fov, // Field of view
//     aspect: camera.aspect, // Aspect ratio
//     near: camera.near, // Near plane
//     far: camera.far,   // Far plane
//   };
//   // Update camera parameters
//   const updateCamera = () => {
//     camera.position.set(cameraParams.positionX, cameraParams.positionY, cameraParams.positionZ);

//     // Update the camera frustum parameters
//     camera.fov = cameraParams.fov;
//     camera.aspect = cameraParams.aspect;
//     camera.near = cameraParams.near;
//     camera.far = cameraParams.far;

//     // Update camera projection matrix after changing FOV, aspect, near, or far
//     camera.updateProjectionMatrix();

//     // Update where the camera is looking
//     const lookAtTarget = new THREE.Vector3(cameraParams.lookAtX, cameraParams.lookAtY, cameraParams.lookAtZ);
//     camera.lookAt(lookAtTarget);
//   };

//   // GUI controls for camera position
//   gui.add(cameraParams, 'positionX', -100, 100).onChange(updateCamera).name('Position X');
//   gui.add(cameraParams, 'positionY', -100, 100).onChange(updateCamera).name('Position Y');
//   gui.add(cameraParams, 'positionZ', -100, 100).onChange(updateCamera).name('Position Z');

//   // GUI controls for camera lookAt target
//   gui.add(cameraParams, 'lookAtX', -100, 100).onChange(updateCamera).name('LookAt X');
//   gui.add(cameraParams, 'lookAtY', -100, 100).onChange(updateCamera).name('LookAt Y');
//   gui.add(cameraParams, 'lookAtZ', -100, 100).onChange(updateCamera).name('LookAt Z');

//   // GUI controls for camera frustum (FOV, aspect ratio, near and far clipping planes)
//   gui.add(cameraParams, 'fov', 1, 180).onChange(updateCamera).name('Field of View');
//   gui.add(cameraParams, 'aspect', 0.1, 4).onChange(updateCamera).name('Aspect Ratio');
//   gui.add(cameraParams, 'near', 0.1, 50).onChange(updateCamera).name('Near Plane');
//   gui.add(cameraParams, 'far', 50, 2000).onChange(updateCamera).name('Far Plane');
  
// }

const createCameraPerspective = function(): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera( 2, window.innerWidth / window.innerHeight, 0.1, 2000 );

  camera.position.z = 15;
	camera.position.y = 210
	// camera.lookAt(new THREE.Vector3(100, 210, 2000))

  return camera
}

const cameraManager = (steps: Option<CameraInfo>, movement: (step: number) => void) => {
  const createManager = (currentStep: number, animationState: string) => ({
    animationState,
    currentStep,
    movement,
    getStep: () => currentStep,
    getStepInfo: () => (!isNone(steps) ? steps.value.getStep(currentStep) : none),
    setCurrentStep: (step: number) => createManager(step, 'update')
  });

  return createManager(0, 'start');
};

const initializeCamera = (
  scene: THREE.Scene, 
  renderer: THREE.WebGLRenderer,
  panelGUI: GUI | undefined,
  store: StoreGeneric
): { 
  camera: THREE.PerspectiveCamera,
  manager: ReturnType<typeof cameraManager>
}=> {
	
  const camera = createCameraPerspective()
	const controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set(0, 210, 0)
  controls.update()
  const cameraSteps = cameraInfo(CameraData)

  const cameraFlow = movementCamera(camera, controls, cameraSteps);
  const manager = cameraManager(cameraSteps, cameraFlow);
  const { step } = storeToRefs(store) 

  watch(step, () => {
    console.log('watch step', step.value)
    const updatedManager = manager.setCurrentStep(step.value);
    updatedManager.movement(step.value);
  })

  // @ts-expect-error
  keyboardListeners(manager, store);

  // createGUI(camera, panelGUI)

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

type MovementCameraType = (camera: THREE.PerspectiveCamera, controls: OrbitControls, cameraSteps: ReturnType<typeof cameraInfo>) => (step: number) => void
const movementCamera: MovementCameraType = (camera, controls, cameraSteps) => (step: number) => {
  // Perform smooth camera animation based on step
  if (isNone(cameraSteps)) {
    return
  }
  const stepInfo = cameraSteps.value.getStep(step);
  if (isNone(stepInfo)) { 
    return
  }
  camera.fov = 50
  camera.updateProjectionMatrix()
  gsap.to(camera.position, {
    x: stepInfo.value.position.x,
    y: stepInfo.value.position.y,
    z: stepInfo.value.position.z,
    duration: 2,
    onUpdate: () => {
      controls.target.set(
        stepInfo.value.lookAt.x,
        stepInfo.value.lookAt.y,
        stepInfo.value.lookAt.z
      );
      controls.update();
    }
  });
};

const keyboardListeners = (
  manager: ReturnType<typeof cameraManager>,
  store: typeof useJourneyStore 
) => {
  const stepKeys = [0, 1, 2, 3, 4, 5].map(v => v.toString());

  window.addEventListener('keypress', (e: KeyboardEvent) => {
    const foundIndex = stepKeys.indexOf(e.key);
    if (foundIndex === -1 || manager.getStep() === foundIndex) {
      return;
    }

    const updatedManager = manager.setCurrentStep(foundIndex);
    updatedManager.movement(foundIndex);

    // @ts-expect-error
    const { setStep } = store
    setStep(foundIndex)

    // console.log(updatedManager.getStep());
  });
};

export { initializeCamera, animateCamera }

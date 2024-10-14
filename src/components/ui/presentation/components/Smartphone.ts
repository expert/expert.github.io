import * as THREE from 'three'
import { loadModel } from '../Loader'
import { type SceneModel  } from '../Loader'
import { StoreGeneric, storeToRefs } from 'pinia'
import { watch } from 'vue'

const Smartphone = function() {
  console.log('Should start the Notebook')
  const material = new THREE.MeshStandardMaterial({ color: 0x808080})

  return {material}
}
const createVideoTexture = () => {
  // 1. Get the video element
  const video = document.getElementById('video');
 
  if (!(video instanceof HTMLVideoElement)) {
    return
  }
  console.log('video', video.src)
  // 2. Create a texture from the video
  let videoTexture = new THREE.VideoTexture(video);

  videoTexture.wrapT = THREE.RepeatWrapping;
  videoTexture.repeat.y = -1;  // Flip the texture vertically
  videoTexture.colorSpace = THREE.SRGBColorSpace;

  videoTexture.needsUpdate = true;
  // Ensure the video plays
  video.play();
  return videoTexture
}
const createVideoMaterial = (videoTexture: THREE.VideoTexture) => {
    // 3. Create a mesh material and set the video texture as the map
    return new THREE.MeshStandardMaterial({ map: videoTexture });
}

const scaleDownBy = (x: number, y: number) => (scale: number) => [x / scale, y / scale]

const scaleModelSize = (model: THREE.Mesh) => {
  return {
    initial: () =>  model.scale.set(2.2, 2.2, 2.2),
    hide: () =>  model.scale.set(0, 0, 0)
  }
}
const initializeSmartphone = (scene: THREE.Scene, store: StoreGeneric) => {
  const smartphone = Smartphone()

  const { video: videoUrl, isPhoneVideo } = storeToRefs(store) 
  
  const smartphoneModel = loadModel('/assets/models/smartphone.glb').then((model) => {
    const sceneModel = model as SceneModel
    scene.add(sceneModel.scene)
    console.log(sceneModel)
    const videoTexture = createVideoTexture()

    if (!videoTexture) {
      return
    }
    const videoMaterial = createVideoMaterial(videoTexture)

    videoMaterial.emissive = new THREE.Color(0x000000);  // Set emissive to black to avoid extra brightness
    videoMaterial.emissiveIntensity = 0;    

    let displayMesh = null
    sceneModel.scene.traverse((child) => {
      // @ts-expect-error
      if (child.isMesh) {
        console.log(child.name);  //log and inspect mesh names here
        if (child.name === 'Plane001') {
          // child.rotation.z = Math.PI / 2
          displayMesh = child
          displayMesh.position.add(new THREE.Vector3(0, 0, 0.1))
          child.material = createVideoMaterial(videoTexture)
        }
      }
    });

    const setupScale = scaleModelSize(sceneModel.scene)

    setupScale.hide()
    sceneModel.scene.position.add(new THREE.Vector3(0, 166, 0))
    sceneModel.scene.rotateY(-Math.PI / 2)

    watch(videoUrl, () => {
      setTimeout(() => {
        videoTexture.dispose()
        videoMaterial.dispose()
        const updateTexture  = createVideoTexture()
        updateTexture.needsUpdate = true
        // displayMesh.material.dispose()
        displayMesh.material = createVideoMaterial(updateTexture)
        displayMesh.material.needUpdate = true
      }, 100)
    })
    watch(isPhoneVideo, () => {
      if (isPhoneVideo.value) {
        setupScale.initial()
      } else {
        setupScale.hide()
      }
    })
  })
  .catch(error => console.error(error))
  return smartphone
} 

const animateSmartphone = (smartphone: unknown, time: number, camera: THREE.PerspectiveCamera): void => {

} 

export { initializeSmartphone, animateSmartphone }
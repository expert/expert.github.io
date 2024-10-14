import * as THREE from 'three'
import { loadModel } from '../Loader'
import { type SceneModel  } from '../Loader'
import { StoreGeneric, storeToRefs } from 'pinia'
import { watch } from 'vue'

const Notebook = function() {
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
    initial: () =>  model.scale.set(10, 10, 10),
    hide: () =>  model.scale.set(0, 0, 0)
  }
}

const initializeNotebook = (scene: THREE.Scene, store: StoreGeneric) => {
  const notebook = Notebook()

  const { video: videoUrl, isPhoneVideo } = storeToRefs(store) 
  
  const notebookModel = loadModel('/assets/models/macbook.glb').then((model) => {
    const sceneModel = model as SceneModel
    scene.add(sceneModel.scene)
    console.log(sceneModel)
    const videoTexture = createVideoTexture()

    if (!videoTexture) {
      return
    }
    const videoMaterial = createVideoMaterial(videoTexture)

    // videoMaterial.emissive = new THREE.Color(0x000000);  // Set emissive to black to avoid extra brightness
    // videoMaterial.emissiveIntensity = 0;    

    // 4. Create a geometry (e.g., PlaneGeometry)
    // const geometryVideo = new THREE.PlaneGeometry(...scaleDownBy(14, 9)(4));  // Adjust size as needed
    let displayMesh = null
    sceneModel.scene.traverse((child) => {
      // @ts-expect-error
      if (child.isMesh) {
        if (child.name === 'Display') {
          // child.rotation.z = Math.PI / 2
          displayMesh = child
          child.material = createVideoMaterial(videoTexture)
        }
        // child.material = notebook.material
      }
    });
    // 5. Create the mesh with the geometry and material
    // const videoMesh = new THREE.Mesh(geometryVideo, videoMaterial);

    // sceneModel.scene.add(videoMesh)


    // videoMaterial.emissive = new THREE.Color(0x000000);  // Set emissive to black to avoid extra brightness
    // videoMaterial.emissiveIntensity = 0;    
    // videoMesh.rotateY(-Math.PI / 2)
    // videoMesh.position.add(new THREE.Vector3(0, 1.22, -1.255))
    const setupScale = scaleModelSize(sceneModel.scene)

    // sceneModel.scene.scale.set(10, 10, 10)
    setupScale.initial()
    sceneModel.scene.position.add(new THREE.Vector3(0, 170, 0))
    sceneModel.scene.rotateY(-Math.PI / 2)

    watch(videoUrl, () => {
      setTimeout(() => {
        videoTexture.dispose()
        videoMaterial.dispose()
        const updateTexture  = createVideoTexture()
        updateTexture.needsUpdate = true
        displayMesh.material.dispose()
        // displayMesh.
        displayMesh.material = createVideoMaterial(updateTexture)
        displayMesh.material.needUpdate = true
      }, 100)
    })

    watch(isPhoneVideo, () => {
      if (isPhoneVideo.value) {
        setupScale.hide()
      } else {
        setupScale.initial()
      }
    })
  })
  .catch(error => console.error(error))
  return notebook
} 

const animateNotebook = (notebook: unknown, time: number, camera: THREE.PerspectiveCamera): void => {

} 

export { initializeNotebook, animateNotebook }
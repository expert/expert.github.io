import * as THREE from 'three'
import { loadModel } from '../Loader'
import { type SceneModel  } from '../Loader'

const Notebook = function() {
  console.log('Should start the Notebook')
  const material = new THREE.MeshStandardMaterial({ color: 0x808080})

  return {material}
}

const scaleDownBy = (x: number, y: number) => (scale: number) => [x / scale, y / scale]
const initializeNotebook = (scene: THREE.Scene) => {
  const notebook = Notebook()

  const notebookModel = loadModel('/assets/gltf/Notebook low poly.glb').then((model) => {
    const sceneModel = model as SceneModel
    scene.add(sceneModel.scene)
    console.log(sceneModel)

    // 1. Get the video element
    const video = document.getElementById('video');

    if (!video) {
      return
    }

    // 2. Create a texture from the video
    // @ts-expect-error
    const videoTexture = new THREE.VideoTexture((video));

    // 3. Create a mesh material and set the video texture as the map
    const videoMaterial = new THREE.MeshStandardMaterial({ map: videoTexture });

    videoMaterial.emissive = new THREE.Color(0x000000);  // Set emissive to black to avoid extra brightness
    videoMaterial.emissiveIntensity = 0;    

    // 4. Create a geometry (e.g., PlaneGeometry)
    const geometryVideo = new THREE.PlaneGeometry(...scaleDownBy(16, 9)(5));  // Adjust size as needed

    // result.scene.traverse((child) => {
    //   // @ts-expect-error
    //   if (child.isMesh) {
    //     console.log(child.name);  //log and inspect mesh names here
    //     // @ts-expect-error
    //     child.material = notebook.material
    //   }
    // });
    // 5. Create the mesh with the geometry and material
    const videoMesh = new THREE.Mesh(geometryVideo, videoMaterial);

    sceneModel.scene.add(videoMesh)

    // Ensure the video plays
    // @ts-expect-error
    video.play();

    // videoMaterial.emissive = new THREE.Color(0x000000);  // Set emissive to black to avoid extra brightness
    // videoMaterial.emissiveIntensity = 0;    
    videoMesh.rotateY(-Math.PI / 2)
    videoMesh.position.add(new THREE.Vector3(0.2, 1, 0))

    sceneModel.scene.scale.set(10, 10, 10)
    sceneModel.scene.position.add(new THREE.Vector3(0, 170, 0))
  })
  .catch(error => console.error(error))
  return notebook
} 

const animateNotebook = (notebook: unknown, time: number, camera: THREE.PerspectiveCamera): void => {

} 

export { initializeNotebook, animateNotebook }
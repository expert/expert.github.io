import * as THREE from 'three'
import { loadModel } from '../Loader'
import { type SceneModel  } from '../Loader'

const Notebook = function() {
  console.log('Should start the Notebook')
  const material = new THREE.MeshStandardMaterial({ color: 0x808080})

  return {material}
}

const initializeNotebook = (scene: THREE.Scene) => {
  const notebook = Notebook()

  const notebookModel = loadModel('/assets/gltf/Notebook low poly.glb').then((model) => {
    const result = model as SceneModel
    scene.add(result.scene)
    console.log(result)

    // 1. Get the video element
    const video = document.getElementById('video');

    if (!video) {
      return
    }

    // 2. Create a texture from the video
    // @ts-expect-error
    const videoTexture = new THREE.VideoTexture((video));

    // 3. Create a mesh material and set the video texture as the map
    const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });
    // @ts-expect-error
    videoTexture.encoding = THREE.sRGBEncoding;

    // 4. Create a geometry (e.g., PlaneGeometry)
    const geometryVideo = new THREE.PlaneGeometry(3, 2);  // Adjust size as needed

    result.scene.traverse((child) => {
      // @ts-expect-error
      if (child.isMesh) {
        console.log(child.name);  //log and inspect mesh names here
        // @ts-expect-error
        child.material = notebook.material
      }
    });
    // 5. Create the mesh with the geometry and material
    const videoMesh = new THREE.Mesh(geometryVideo, videoMaterial);


    // Ensure the video plays
    // @ts-expect-error
    video.play();

    // videoMaterial.emissive = new THREE.Color(0x000000);  // Set emissive to black to avoid extra brightness
    // videoMaterial.emissiveIntensity = 0;    
    result.scene.add(videoMesh)
    videoMesh.rotateY(-Math.PI / 2)
    videoMesh.position.add(new THREE.Vector3(0.2, 1, 0))

    result.scene.scale.set(10, 10, 10)
    result.scene.position.add(new THREE.Vector3(0, 170, 0))
  })
  .catch(error => console.error(error))
  return notebook
} 

const animateNotebook = (notebook: unknown, time: number, camera: THREE.PerspectiveCamera): void => {

} 

export { initializeNotebook, animateNotebook }
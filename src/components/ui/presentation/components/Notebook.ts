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

  const notebookModel = loadModel('/assets/models/macbook.glb').then((model) => {
    const sceneModel = model as SceneModel
    scene.add(sceneModel.scene)
    console.log(sceneModel)

    // 1. Get the video element
    const video = document.getElementById('video');

    if (!(video instanceof HTMLVideoElement)) {
      return
    }
    // 2. Create a texture from the video
    const videoTexture = new THREE.VideoTexture(video);

    videoTexture.wrapT = THREE.RepeatWrapping;
    videoTexture.repeat.y = -1;  // Flip the texture vertically

    videoTexture.colorSpace = THREE.SRGBColorSpace;

    // 3. Create a mesh material and set the video texture as the map
    const videoMaterial = new THREE.MeshStandardMaterial({ map: videoTexture });

    videoMaterial.emissive = new THREE.Color(0x000000);  // Set emissive to black to avoid extra brightness
    videoMaterial.emissiveIntensity = 0;    

    // 4. Create a geometry (e.g., PlaneGeometry)
    // const geometryVideo = new THREE.PlaneGeometry(...scaleDownBy(14, 9)(4));  // Adjust size as needed
    sceneModel.scene.traverse((child) => {
      // @ts-expect-error
      if (child.isMesh) {
        console.log(child.name);  //log and inspect mesh names here
        if (child.name === 'Display') {
          // child.rotation.z = Math.PI / 2
          child.material = videoMaterial
        }
        // child.material = notebook.material
      }
    });
    // 5. Create the mesh with the geometry and material
    // const videoMesh = new THREE.Mesh(geometryVideo, videoMaterial);

    // sceneModel.scene.add(videoMesh)

    // Ensure the video plays
    video.play();

    // videoMaterial.emissive = new THREE.Color(0x000000);  // Set emissive to black to avoid extra brightness
    // videoMaterial.emissiveIntensity = 0;    
    // videoMesh.rotateY(-Math.PI / 2)
    // videoMesh.position.add(new THREE.Vector3(0, 1.22, -1.255))

    sceneModel.scene.scale.set(10, 10, 10)
    sceneModel.scene.position.add(new THREE.Vector3(0, 170, 0))
  })
  .catch(error => console.error(error))
  return notebook
} 

const animateNotebook = (notebook: unknown, time: number, camera: THREE.PerspectiveCamera): void => {

} 

export { initializeNotebook, animateNotebook }
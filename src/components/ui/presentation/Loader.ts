import { AnimationClip, Camera, Group, Object3DEventMap } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three'

// Instantiate a loader
const loader = new GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
// loader.setDRACOLoader( dracoLoader );
export type SceneModel = {
  scene: THREE.Mesh,
  animations: AnimationClip[],
  cameras: Camera[],
  assets: unknown
}

// Load a glTF resource
const loadModel = (url: string) => {
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      // on Load
      (gltf) => {
        const model = {
          scene: gltf.scene,
          animations: gltf.animations,
          cameras: gltf.cameras,
          asset: gltf.asset
        }
        resolve(model)
      },
      // onProgress
      (xhr) => {
        const progress = xhr.loaded / xhr.total * 100
        // console.log(`${progress}% loaded`)
      },
      // onError
      (error) => {
        reject(new Error('An error occurred while loading the model.'))
      }
    )
  })
}

export { loadModel }
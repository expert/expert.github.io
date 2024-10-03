import * as THREE from 'three'
import { loadModel } from '../Loader'
const City = function() {
  console.log('Should start the city')
}

const initializeCity = (scene: THREE.Scene) => {
  const city = City()

  const cityModel = loadModel('/assets/gltf/city.glb').then(model => {

    // @ts-expect-error
    scene.add(model.scene)
    console.log(model)
  })
  .catch(error => console.error(error))
  return city
} 

const animateCity = (time: number): void => {
} 

export { initializeCity, animateCity }

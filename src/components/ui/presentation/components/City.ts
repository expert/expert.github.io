import * as THREE from 'three'
import { loadModel } from '../Loader'
const City = function() {
  console.log('Should start the city')
}

const initializeCity = (scene: THREE.scene) => {
  const city = City()

  const cityModel = loadModel('/assets/gltf/city.glb').then(model => {
    scene.add(model.scene)
    console.log(model)
  })
  .catch(error => console.error(error))


  return city
} 

const animateCity = (city, time: number, camera): void => {
  let cam = camera
} 

export { initializeCity, animateCity }

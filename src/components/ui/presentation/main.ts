import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Ref } from 'vue';
import { catmullCurveFromPath  } from '@/lib/utils';
import Data from './data/scene.json'
import { useMouse } from '@vueuse/core';
import { initializeTube, animateTube } from './components/BrainTube';
import { initializeParticle, animateParticle } from './components/BrainParticles';
import { initializeCity, animateCity } from './components/City';

const registerComponent = <T>(init: () => T, animate: (component: T, time: number) => void) => {
	const component = init();
	return (time: number) => {
			animate(component, time);
	};
};

export const initialize = (elRef: Ref) => {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 2000 );

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );


	elRef.value.appendChild( renderer.domElement );

	const controls = new OrbitControls( camera, renderer.domElement );
	camera.position.z = 345;
	camera.position.y = 100
	camera.lookAt(new THREE.Vector3(0, 0, 0))
	const light = new THREE.AmbientLight(0x404040)
	light.intensity = 100
	scene.add(light)
	
	const { x, y } = useMouse()
	const width = window.innerWidth;
	const height = window.innerHeight;

	const brainCurves = catmullCurveFromPath(Data.economics[0].paths)

	// const componentTubes = registerComponent(
	// 	() => initializeTube(scene, brainCurves),
	// 	(tubes, time) => {
	// 		const mouseX = (x.value / width) * 2 - 1
	// 		const mouseY = -(y.value / height) * 2 + 1
	// 		const mouse = new THREE.Vector3(mouseX, mouseY, 0)

	// 		animateTube(tubes, time, mouse)
	// })

	// const componentParticles = registerComponent(
	// 	() => initializeParticle(scene, brainCurves),
	// 	(particles, time) => {
	// 		animateParticle(particles, time)
	// 	}
	// )

	const componentCity = registerComponent(
		() => initializeCity(scene),
		(city, time) => {
			animateCity(city, time)
		}
	)

	function animate(time: number) {
		// componentTubes(time)
		// componentParticles(time)
		componentCity(time, camera)

		renderer.render( scene, camera );
	}
	renderer.setAnimationLoop( animate );
}
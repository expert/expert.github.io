import * as THREE from 'three';
import { Ref } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Data from './data/scene.json'
import { useMouse } from '@vueuse/core';
import { initializeTube, animateTube } from './BrainTube';
import { initializeParticle, animateParticle } from './BrainParticles';
import { catmullCurvesAdapter  } from '@/lib/utils';


const registerComponent = <T>(init: () => T, animate: (component: T, time: number) => void) => {
	const component = init();
	return (time: number) => {
			animate(component, time);
	};
};

export const initialize = (elRef: Ref) => {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 2, window.innerWidth / window.innerHeight, 0.1, 100 );

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );


	elRef.value.appendChild( renderer.domElement );

	const controls = new OrbitControls( camera, renderer.domElement );
	const loader = new GLTFLoader();

	camera.position.z = 5;
	

	const { x, y } = useMouse()
	const width = window.innerWidth;
	const height = window.innerHeight;



	const brainCurves = catmullCurvesAdapter(Data.economics[0].paths)

	const componentTubes = registerComponent(
		() => initializeTube(scene, brainCurves),
		(tubes, time) => {
			const mouseX = (x.value / width) * 2 - 1
			const mouseY = -(y.value / height) * 2 + 1
			const mouse = new THREE.Vector3(mouseX, mouseY, 0)

			animateTube(tubes, time, mouse)
	})

	const componentParticles = registerComponent(
		() => initializeParticle(scene, brainCurves),
		(particles, time) => {
			animateParticle(particles, time)
		}
	)

	
	function animate(time: number) {
		componentTubes(time)
		componentParticles(time)

		renderer.render( scene, camera );
	}
	renderer.setAnimationLoop( animate );
}
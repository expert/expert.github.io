import * as THREE from 'three';
// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { Ref } from 'vue';
import { catmullCurveFromPath  } from '@/lib/utils';
import Data from './data/scene.json'
import { useMouse } from '@vueuse/core';
import { initializeTube, animateTube } from './components/BrainTube';
import { initializeParticle, animateParticle } from './components/BrainParticles';
import { initializeCity, animateCity } from './components/City';
import { initializeCamera, animateCamera } from './components/Camera';
import { animateNotebook, initializeNotebook } from './components/Notebook';
import { initializeSmartphone, animateSmartphone } from './components/Smartphone';
import { useJourneyStore  } from '@/stores/journey';
import router from '@/router';

const registerComponent = <T>(init: () => T, animate: (component: T, time: number) => void) => {
	const component = init();
	return (time: number) => {
			animate(component, time);
	};
};

const windowSize = () => {
	const htmlTag = document.querySelector('html')
	return htmlTag ? {
		width: () => htmlTag.clientWidth,
		height: () => htmlTag.clientHeight
	} 
	: undefined
}

export const initialize = (elRef: Ref, store: typeof useJourneyStore) => {
	const scene = new THREE.Scene();
	const journeyStore = store()
	const getSize = windowSize()

	const renderer = new THREE.WebGLRenderer({ antialias: true });
	if(getSize) {
		setTimeout(() => {
			renderer.setSize( getSize.width(), getSize.height() );
		}, 100)
	}

	window.addEventListener("resize", onWindowResize, false);
	window.addEventListener("hashchange", onWindowResize, false)

	function onWindowResize() {
		if(!getSize) {
			return
		}
		camera.aspect = getSize.width() / getSize.height();
		camera.updateProjectionMatrix();

		renderer.setSize(getSize.width(), getSize.height());
	}

	elRef.value.appendChild( renderer.domElement );


	// const panelGUI = new GUI( { width: 310 } );
	const panelGUI = undefined;

	const light = new THREE.AmbientLight(0x404040)
	light.intensity = 50
	scene.add(light)

	let camera: THREE.PerspectiveCamera;
	const cameraComponent = registerComponent(
		() => {
			const initialized = initializeCamera(scene, renderer, panelGUI, journeyStore)
			camera = initialized.camera
			return initialized
		},
		(component, time) => {
			animateCamera({ component, renderer, scene} , time)
		}
	)
	
	const { x, y } = useMouse()
	const width = window.innerWidth;
	const height = window.innerHeight;

	const brainCurves = catmullCurveFromPath(Data.economics[0].paths)

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
			animateParticle(particles)
		}
	)

	const componentCity = registerComponent(
		() => initializeCity(scene),
		(city, time) => {
			animateCity(time)
		}
	)

	const componentNotebook = registerComponent(
		() => initializeNotebook(scene, journeyStore),
		(notebook, time) => {
			animateNotebook(notebook, time, camera)
		}
	)

	const componentSmartphone = registerComponent(
		() => initializeSmartphone(scene, journeyStore),
		(smartphone, time) => {
			animateSmartphone(smartphone, time, camera)
		}
	)

	function animate(time: number) {
		cameraComponent(time)
		componentTubes(time)
		componentParticles(time)
		// componentCity(time)

	}
	renderer.setAnimationLoop( animate );
}
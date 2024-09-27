import * as THREE from 'three';
import { Ref } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Data from './data/scene.json'
import { Tubes } from './BrainTube';
import { type CatmullRomCurve3 } from 'three';
import { useMouse } from '@vueuse/core';
import particlesVertex from './shaders/particles.vertex.glsl'
import particlesFragment from './shaders/particles.fragment.glsl'
import { initializeTube, animateTube } from './BrainTube';

const randomRange = (min: number, max: number): number => Math.random() * (max - min) + min

// Spherical curves
// let curves = []
// for(let i = 0; i < 100; i++) {
// 	let points =[]
// 	let range = randomRange(0.5, 1)
// 	for(let j = 0; j < 100; j++) {
// 		points.push(
// 			new THREE.Vector3().setFromSphericalCoords(
// 				1,
// 				Math.PI - (j / 100) * Math.PI * range ,
// 				(i / 100) * Math.PI * 2
// 			)
// 		)
// 	}	

// 	let tmpCurve = new THREE.CatmullRomCurve3(points)
// 	curves.push(tmpCurve)
// }

// console.log('Data.economics', Data.economics)
const catmullCurvesAdapter: (data: number[][]) 
	=> CatmullRomCurve3[] = 
		(data) => 
			data.map((path) => {
				let points = []
				for (let i = 0; i < path.length; i +=3) {
						points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]))
				}
				return new THREE.CatmullRomCurve3(points)
			})

const brainCurves = catmullCurvesAdapter(Data.economics[0].paths)

const myPoints = []
let density = 10;
let numberOfPoints = density*brainCurves.length

let positionsArray = []
for (let i = 0; i < brainCurves.length; i++) {
	positionsArray.push(
		randomRange(-1, 1),
		randomRange(-1, 1),
		randomRange(-1, 1)
	)
}


for (let i = 0; i < brainCurves.length; i++) {
	for (let j = 0; j < density; j++) {
		myPoints.push({
			currentOffset: Math.random(),
			speed: Math.random() * 0.01,
			curve: brainCurves[i],
			currentPosition: 0
		})
	}
}

// let positions = new Float32Array(positionsArray)

const BrainParticles = function(allthecurves: []) {

	const geometry = new THREE.BufferGeometry()
	const vertices = new Float32Array(positionsArray)

	geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))

	const brainParticleMaterial = new THREE.ShaderMaterial({
		uniforms: {
			time: { value: 1.0 },
			resolution: { value: new THREE.Vector2() },
			color: { value: new THREE.Color(0xa3a70a94) }
		},
		// gsls
		vertexShader: particlesVertex,
		fragmentShader: particlesFragment,
		transparent: true,
		depthTest: false,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		// wireframe: true
	})

	return new THREE.Points(geometry, brainParticleMaterial)
}

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
	
	// const tubes = Tubes(brainCurves)
	// tubes.forEach((tube) => scene.add(tube))

	const particles = BrainParticles(brainCurves)
	scene.add(particles)
	// particles.forEach(particle => scene.add(particle))

	camera.position.z = 5;

	let currentPositions = particles.geometry.attributes.position.array

	const { x, y } = useMouse()
	const width = window.innerWidth;
	const height = window.innerHeight;

	const animateTubes = registerComponent(
		() => initializeTube(scene, brainCurves),
		(tubes, time) => {
			const mouseX = (x.value / width) * 2 - 1
			const mouseY = -(y.value / height) * 2 + 1
			const mouse = new THREE.Vector3(mouseX, mouseY, 0)

			animateTube(tubes, time, mouse)
	})

	
	function animate(time: number) {
		animateTubes(time)

		for (let i = 0; i < myPoints.length; i++) {
			myPoints[i].currentPosition += myPoints[i].speed
			myPoints[i].currentPosition = myPoints[i].currentPosition % 1 // Reseting to 0, if position is bigger than 1

			let currentPoint = myPoints[i].curve.getPointAt(myPoints[i].currentPosition)

			currentPositions[i*3] = currentPoint.x
			currentPositions[i*3+1] = currentPoint.y
			currentPositions[i*3+2] = currentPoint.z
		}


		particles.geometry.attributes.position.needsUpdate = true

		renderer.render( scene, camera );
	}
	renderer.setAnimationLoop( animate );
}
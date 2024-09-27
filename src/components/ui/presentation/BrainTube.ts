import { type CatmullRomCurve3 } from 'three';
import * as THREE from 'three'
import fragmentTube from './shaders/tube.fragment.glsl'
import vertextube from './shaders/tube.vertex.glsl'


export const Tube = function(curve: CatmullRomCurve3) {
	// let points = []
	// for(let i = 0; i < 10; i++) {
	// 	points.push(
	// 		new THREE.Vector3(
	// 			(i - 5) * 2,
	// 			Math.sin(i * 2) * 10 + 5,
	// 			0
	// 		)
	// 	)
	// }

	// let curve = new THREE.CatmullRomCurve3(points)

	const geometry = new THREE.TubeGeometry(curve, 64, 0.001, 3, false );
	// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const brainMaterial = new THREE.ShaderMaterial({
		uniforms: {
			time: { value: 0.0 },
			resolution: { value: new THREE.Vector2() },
			color: { value: new THREE.Color(0xa3a70a94) },
      mouse: { value: new THREE.Vector3(0,0,0)}
		},
		// gsls
		vertexShader:vertextube,
		fragmentShader: fragmentTube,
		side: THREE.DoubleSide,
		transparent: true,
		depthTest: false,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		// wireframe: true
	})

	return new THREE.Mesh( geometry, brainMaterial );
}

export const Tubes = function(brainCurves) {
	return brainCurves.map(Tube)
}




// varying vec2 vUv;
// uniform float time;
// varying float vProgress;
// uniform vec3 mouse;
// void main() {
//   vUv = uv;
//   vProgress = smoothstep(-1.0,1.0, sin(vUv.x * 8. + time * 0.002));
//   vec3 p = position;
//   float maxDist = 0.7;
//   float dist = length(mouse - p);
//   if (dist < maxDist) {
//     vec3 dir = normalize(mouse - p);
//     dir *= (1. - dist/maxDist);
//     p -= dir;
//   }
//   gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
// }			
import { type CatmullRomCurve3 } from 'three';
import * as THREE from 'three'
import fragmentTube from '../shaders/tube.fragment.glsl'
import vertextube from '../shaders/tube.vertex.glsl'

const Tube = function(curve: CatmullRomCurve3): THREE.Mesh {
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

const Tubes = function(curves: CatmullRomCurve3[]) {
	return curves.map(Tube)
}

const initializeTube = (scene: THREE.Scene, curves: CatmullRomCurve3[]) => {
	const tubes = Tubes(curves);  // Assuming brainCurves are passed in
	tubes.forEach((tube: THREE.Mesh) => {
			(tube.material as THREE.ShaderMaterial).uniforms.mouse = { value: new THREE.Vector3(0, 0, 0) };
			(tube.material as THREE.ShaderMaterial).uniforms.time = { value: 0 };
	});
	tubes.forEach((tube: THREE.Mesh) => scene.add(tube))
	return tubes;
};

const animateTube = (tubes: THREE.Mesh[], time: number, mouse: THREE.Vector3) => {
	tubes.forEach((tube) => {
			(tube.material as THREE.ShaderMaterial).uniforms.time.value = time;
			(tube.material as THREE.ShaderMaterial).uniforms.mouse.value = mouse;
	});
};

export { initializeTube, animateTube }

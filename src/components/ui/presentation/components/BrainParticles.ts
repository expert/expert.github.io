import * as THREE from 'three'
import particlesVertex from '../shaders/particles.vertex.glsl'
import particlesFragment from '../shaders/particles.fragment.glsl'

import { randomRange } from '@/lib/utils'

type Point = {
  currentOffset:  number
  speed: number
  curve: THREE.CatmullRomCurve3
  currentPosition: number
}

const generateRandomVertices = (len: number = 0) => {
  let positionsArray = []
  for (let i = 0; i < len; i++) {
    positionsArray.push(
      randomRange(-1, 1),
      randomRange(-1, 1),
      randomRange(-1, 1)
    )
  }

  return positionsArray
}

const generatePoints = (curves: THREE.CatmullRomCurve3[], density = 10) => {
  const myPoints: Point[] = []
  for (let i = 0; i < curves.length; i++) {
    for (let j = 0; j < density; j++) {
      myPoints.push({
        currentOffset: Math.random(),
        speed: Math.random() * 0.01,
        curve: curves[i],
        currentPosition: 0
      })
    }
  }
  return myPoints
}

const BrainParticles = function(randomVertices: number[]) {

	const geometry = new THREE.BufferGeometry()
	const vertices = new Float32Array(randomVertices)

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

const initializeParticle = (scene: THREE.Scene, curves: THREE.CatmullRomCurve3[]) => {
  const randomVertices = generateRandomVertices(curves.length)
  const points = generatePoints(curves)
	const particles = BrainParticles(randomVertices)
	scene.add(particles)
  return { particles, points}
}

const animateParticle = (
    { particles, points } : { particles: THREE.Points, points: Point[] },
    time: number
  ) => {

	let currentPositions = particles.geometry.attributes.position.array
  for (let i = 0; i < points.length; i++) {
    points[i].currentPosition += points[i].speed
    points[i].currentPosition = points[i].currentPosition % 1 // Reseting to 0, if position is bigger than 1

    let currentPoint = points[i].curve.getPointAt(points[i].currentPosition)

    currentPositions[i*3] = currentPoint.x
    currentPositions[i*3+1] = currentPoint.y
    currentPositions[i*3+2] = currentPoint.z
  }
  particles.geometry.attributes.position.needsUpdate = true
}

export { initializeParticle, animateParticle }
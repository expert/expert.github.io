import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { type CatmullRomCurve3 } from 'three';
import * as THREE from 'three';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const randomRange = (min: number, max: number): number => Math.random() * (max - min) + min

export const catmullCurveFromPath: (path: number[][]) 
	=> CatmullRomCurve3[] = 
		(data) => 
			data.map((path) => {
				let points = []
				for (let i = 0; i < path.length; i +=3) {
						points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]))
				}
				return new THREE.CatmullRomCurve3(points)
			})


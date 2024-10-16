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

export function wrapWordsInKbdTags(
	input: string,
	words: { word: string; class: string; index?: number }[]
): string {
	let result = input;

	words.forEach(({ word, class: className, index }) => {
		let regex = new RegExp(`(${word})`, 'g');
		let matches = [...result.matchAll(regex)];

		if (index !== undefined) {
			if (matches[index]) {
				let match = matches[index];
				let startIndex = match.index!;
				result = replaceAtIndex(
					result,
					startIndex,
					word.length,
					`<kbd class="${className}">${word}</kbd>`
				);
			}
		} else {
			// Wrap all occurrences
			result = result.replace(regex, `<kbd class="${className}">$1</kbd>`);
		}
	});

	return result;
}

// Helper function to replace at a specific index
export function replaceAtIndex(
	str: string,
	index: number,
	length: number,
	replacement: string
): string {
	return str.slice(0, index) + replacement + str.slice(index + length);
}


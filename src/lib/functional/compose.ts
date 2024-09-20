// Function Composition
// https://www.youtube.com/watch?v=p5L5p4NMS78&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=4&pp=iAQB

type Increment = (x: number) => number
const increment: Increment = x => x + 1


type Tostring = (x: number) => string
const tostring: Tostring = x => `"${x}"`


type Compose = <A, B, C>(
  f: (x: B) => C,
  g: (x: A) => B
) => (x: A) => C
export const compose: Compose = (f, g) => x => f(g(x))

// Usage example: 

// console.log(increment(5))

// console.log(tostring(increment(6)))
// type IncrementThenTostring = (x: number) => string
// const incrementThenTostring: IncrementThenTostring = compose(tostring, increment)

// console.log(incrementThenTostring(99))


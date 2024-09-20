// Function Currying
// https://www.youtube.com/watch?v=mrskE3X0hXE&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=6

function normal_sum(x, y) { 
  return x + y
}

// console.log(normal_sum(4, 5))

type Sum = (x: number) => (y: number) => number
const sum: Sum = x => {
  return y => {
    return x + y
  }
}

console.log(sum(2)(1))

type Increment = (x: number) => number
const increment: Increment = sum(1)

type Decrement = (x: number) => number
const decrement: Decrement = sum(-1)

console.log(increment(55))

console.log(decrement(32))

// type Sum2 = (x: number)

type Curry2 = <A, B, Z>(f: (a: A, b: B) => Z)
  => (a: A) 
  => (b: B) 
  => Z
const curry2: Curry2 = f => a => b => f(a, b)

const sum2 = curry2(normal_sum)

console.log(sum2(5)(5))
// Function Recursion
// https://www.youtube.com/watch?v=KcccqXGuvhE&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=7

function normal_sum_all(xs: number[]) {
  let result = 0;

  for (let i = 0; i < xs.length; i++) {
    result += xs[i]
  }

  return result
}

// console.log(normal_sum_all([5,4,12]))

// type SumAll = xs extends [infer A, ...infer B] ? A : never 

type SumAll = (xs: number[]) => number

const sumArr: SumAll = ([a, ...rest]) => {
  return typeof a !== 'undefined' ? a + sumArr(rest) : 0
}


// console.log(sumArr([3, 22, 21, 2]))
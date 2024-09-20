// Functional Programming - 12: Either demo
// https://www.youtube.com/watch?v=5ZSC_yf5v3Q&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=12
import { compose } from './compose'

const divideTwoIfEven = function (x: number): number {
  if (x === 0) {
    throw 'cannot divide by 0'
  } else if (x % 2 !== 0 ) {
    throw 'number is not even'
  } else {
    return 2 / x 
  }
}


// console.log(divideTwoIfEven(0))

export type Either<E, A> = Left<E> | Right<A>

export interface Left<E, A = never> {
  _tag: 'Left',
  left: E
}
export interface Right<A, E = never> {
  _tag: 'Right',
  right: A
}

export const left = <E, A=never>(e: E): Either<E, A> => ({
  _tag: 'Left',
  left: e
})
export const right = <A, E=never>(a: A): Either<E, A> => ({
  _tag: 'Right',
  right: a
})
export const isLeft = <A, E>(x: Either<A, E>): x is Left<A> => x._tag === 'Left'

const divideTwoIfEven2 = function (x: number): Either<string, number> {
  if (x === 0) {
    return left('cannot divide by 0')
  } else if (x % 2 !== 0 ) {
    return left('number is not even')
  } else {
    return right(2 / x)
  }
}

console.log(divideTwoIfEven2(0))

type Increment = (x: number) => number
const increment: Increment = (x) => x + 1

const composed = compose(
    (x) => isLeft(x) ? x : right(increment(x.right)),
    divideTwoIfEven2
  )

console.log(composed(8))
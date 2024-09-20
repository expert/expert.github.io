// Functional Programming - 10: Option, Maybe and null value demo
// https://www.youtube.com/watch?v=ChiobjYPVOk&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=10

import { compose } from './compose'

type DivideTwo = (x: number) => number
const divideTwo: DivideTwo = x => 2 / x

type Increment = (x: number) => number
const increment: Increment = x => x + 1


const composed = compose(increment, divideTwo)

export type Option<A> = Some<A> | None
export interface Some<A> {
  _tag: 'Some'
  value: A
}
export interface None {
  _tag: 'None'
}

export const some = <A>(x: A): Option<A> => ({ _tag: 'Some', value: x })
export const none: Option<never> = { _tag: 'None' }

export const isNone = <A>(x: Option<A>): x is None => x._tag === 'None'

type DivideTwo2 = (x: number) => Option<number>

const divideTwo2: DivideTwo2 = x => x === 0 ? none : some(2 / x)

const composed2 = compose(
  (x: Option<number>) => isNone(x) ? none : some(increment(x.value)), 
  divideTwo2
)

// Usage examples:
// console.log(composed(8))
// console.log(divideTwo(8))
// 
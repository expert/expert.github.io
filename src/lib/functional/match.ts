// import { Option, None, isNone, none, Some, some  } from './option'
// import { Either, Left, Right, isLeft, left, right } from './either';

import { List, isNill } from "./list";

// Functional Programming - 16: ADT, Pattern Matching demo
// https://www.youtube.com/watch?v=ZXbXTMLr9QU&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=16

// Option 
// type Match = <A, B, C>(onNone: () => B, onSome: (a: A) => C) 
//   => (x: Option<A>) => B | C
// const match: Match = (onNone, onSome) => x => 
//   isNone(x) ? onNone() : onSome(x.value)

// const maybeNum: Option<number> = some(100)

// const result = match(
//   () => -1,
//   (a: number) => `num is ${a}`
// )(maybeNum)

// console.log(result)

// Either
// type Match = <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B)
//   => (x: Either<E, A>) => B

// const match: Match = (onLeft, onRight) => x => 
//     isLeft(x) ? onLeft(x.left) : onRight(x.right)

// const errorOrNum: Either<string, number> = left('sss')

// const result = match(
//   (e) => 'Something wrong: ' + e,
//   (x) => 'NUmber is: ' + x
// )(errorOrNum)

// console.log(result)

// List 
type Match = <A, B>(onNill: () => B, onCons: (head: A, tail: List<A>) => B) 
  => (xs: List<A>) => B 

export const match: Match = (onNill, onCons) => xs => 
  isNill(xs) ? onNill() : onCons(xs.head, xs.tail)

// Usage example: 
// const list1 = cons(1, cons(4, cons(11, nill)))
// // const list2 = nill

// const result = match(
//   () => 'List is empty',
//   (head: number, tail: List<number>) => `Nice list ${head} = ${tail}` 
// )(list1)

// console.log(result)
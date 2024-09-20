// Functional Programming - 19: Magma, Semigroup, Monoid demo
// https://www.youtube.com/watch?v=QpibvchSlg0&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=19

import { List, cons, nill } from "./list";
import { matchList } from "./match";

type AddAll = (xs: List<number>) => number
const addAll: AddAll = 
  matchList(
    () => 0,
    (head: number, tail: List<number>) => head + addAll(tail)
  )

type MultyplyAll = (xs: List<number>) => number
const multiplyAll: MultyplyAll = 
  matchList(
    () => 1,
    (head: number, tail: List<number>) => head * multiplyAll(tail)
  )

type AppendAll = (xs: List<string>) => string
const appendAll: AppendAll = 
  matchList(
    () => '',
    (head: string, tail: List<string>) => head + appendAll(tail)
  )

interface Magma<A> {
  concat: (x: A, y: A) => A
}
export interface Semigroup<A> extends Magma<A> {}

// const addSemigroup: Semigroup<number> = { concat: (x, y) => x + y }
// const multiplySemigroup: Semigroup<number> = { concat: (x, y) => x * y }
// const appendSemigroup: Semigroup<string> = { concat: (x, y) => x.concat(y) }

const concatAll = 
  <A>(s: Semigroup<A>) =>
    (startsWith: A) =>
      (xs: List<A>): A =>
        matchList(
          () => startsWith,
          (head: A, tail: List<A>) => s.concat(head, concatAll(s)(startsWith)(tail))
        )(xs)

export interface Monoid<A> extends Semigroup<A> {
  empty: A
}

// const addMonoid: Monoid<number> = { ...addSemigroup, empty: 0}
// const multiplyMonoid: Monoid<number> = { ...multiplySemigroup, empty: 1}
// const appendMonoid: Monoid<string> = { ...appendSemigroup, empty: ''}
// // , concatAll2(m)(tail)
const concatAll2 = 
  <A>(m: Monoid<A>) =>
      (xs: List<A>): A => 
        matchList(
          () => m.empty,
          (head: A, tail: List<A>) => m.concat(head, concatAll2(m)(tail))
        )(xs)



// Usage Examples: 
// const list1 = cons(8, cons(3, cons(6, nill)))
// const list2 = cons('Cernobai', cons(' ', cons('Alexei', nill)))


// // console.log(addAll(list1))
// // console.log(multiplyAll(list1))
// // console.log(appendAll(list2))

// // console.log(concatAll(addSemigroup)(0)(list1))
// // console.log(concatAll(appendSemigroup)('')(list2))
// // const test = concatAll2(addMonoid)(list1)
// console.log(concatAll2(addMonoid)(list1))
// console.log(concatAll2(multiplyMonoid)(list1))
// console.log(concatAll2(appendMonoid)(list2))
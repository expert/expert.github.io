import { showList } from './list';
// Functional Programming - 27: Type Class in fp-ts DEMO
// https://www.youtube.com/watch?v=8llcVd9UVBQ&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=27

import { Either, left, right } from './either'
import { Option, none, some } from './option'
import { List, cons, nill } from './list'
import { HKT, Kind, Kind2, URIS, URIS2 } from 'fp-ts/HKT'
import { match, matchEither, matchList } from './match'

declare module 'fp-ts/HKT' {
  interface URItoKind<A> {
    'List': List<A>,
    'Option': Option<A>
  }
  interface URItoKind2<E, A> {
    'Either': Either<E, A>
  }
}

export interface Functor<F> {
  URI: F,
  map: <A, B>(f: (x: A) => B) => (fa: HKT<F, A>) => HKT<F, B>
}

export interface Functor1<F extends URIS> {
  URI: F
  map: <A, B>(f: (x: A) => B) => (fa: Kind<F, A>) => Kind<F, B>
}
export interface Functor2<F extends URIS2> {
  URI: F
  map: <E, A, B>(f: (x: A) => B) => (fa: Kind2<F,E,A>) => Kind2<F,E,B>
}

function lift<F extends URIS2>(F: Functor2<F>): <E, A,B>(f: (x: A)=>B) => (fa: Kind2<F,E,A>) => Kind2<F,E,B> // Two Kind parameters
function lift<F extends URIS>(F: Functor1<F>): <A,B>(f: (x: A)=>B) => (fa: Kind<F,A>) => Kind<F,B> // For One Kind parameters
function lift<F>(F: Functor<F>): <A,B>(f: (x: A)=>B) => (fa: HKT<F,A>) => HKT<F,B>
function lift<F>(F: Functor<F>): <A,B>(f: (x: A)=>B) => (fa: HKT<F,A>) => HKT<F,B> {
  return f => fa => F.map(f)(fa)
}

export const optionFunctor: Functor1<'Option'> = {
  URI: 'Option',
  map: f => match(
    () => none,
    (a) => some(f(a))
  )
}
export const listFunctor: Functor1<'List'> = {
  URI: 'List',
  map: f => matchList(
    () => nill,
    (head, tail) => cons(f(head), listFunctor.map(f)(tail))
  )
}

export const eitherFunctor: Functor2<'Either'> = {
  URI: 'Either',
  map: f => matchEither(
    (e) => left(e),
    a => right(f(a))
  )
}


// // Usage examples:
// type Increment = (x: number) => number
// const increment: Increment = x => x+1

// const liftIncrement = lift(optionFunctor)(increment)

// console.log('->', liftIncrement(some(12)))
// console.log(liftIncrement(none))

// // Either
// const liftIncrement2 = lift(eitherFunctor)(increment)
// console.log('->', liftIncrement2(right(12)))
// console.log(liftIncrement2(left('error')))


// // List
// const liftIncrement3 = lift(listFunctor)(increment)

// const myList = cons(1, cons(3, cons(5, nill)));

// console.log('->', showList(liftIncrement3(myList)));  // Should apply increment to each element of the list
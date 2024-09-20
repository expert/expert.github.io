// Functional Programming - 23: Functor DEMO
// https://www.youtube.com/watch?v=N4mft_n06Wo&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=23

import { compose } from "./compose"
import { Either, left, right } from "./either"
import { List, cons, nill, showList } from "./list"
import { match, matchEither, matchList } from "./match"
import { Option, none, some } from "./option"

type StringLength = (s: string) => number
const strLength: StringLength = (s) => s.length

type OptionStringLength = (Fx: Option<string>) => Option<number>
const OptionalStringLength: OptionStringLength = Fx => 
  match(
    () => none,
    (value: string) => some(strLength(value))
  )(Fx)

type Increment = (x: number) => number
const increment: Increment = x => x + 1

type OptionalIncrement = (x: Option<number>) => Option<number>
const optionalIncrement: OptionalIncrement = match(
  () => none,
  (value: number) => some(increment(value))
)


type MapOption = <A, B>(f: (x: A) => B)
  => (Fx: Option<A>) => Option<B>

const map_option: MapOption = f => match(
  () => none,
  (value) => some(f(value))
)

// List
// For reference, implemantation without reusability
// type ListStrLength = (x: List<string>) => List<number>
// type ListIncrement = (x: List<number>) => List<number>

type MapList = <A, B>(
  f: (x: A) => B
) => (Fx: List<A>) => List<B>

const map_list: MapList = f => matchList(
  () => nill,
  (head, tail) => cons(f(head), map_list(f)(tail))
)

// Either
type MapEither = <A,B,E>(
  f: (x: A) => B
) => (Fx: Either<E, A>) => Either<E, B>
const map_either: MapEither = f => matchEither(
  (e) => left(e),
  (a) => right(f(a))
)

// Usage examples
// console.log(stringLength(''))
// console.log(OptionalStringLength(some('test')))
// console.log(OptionalStringLength(none))

// console.log(increment(5))
// console.log(optionalIncrement(some(2323)))

// console.log(optionalIncrement(none))

// const strLength2 = map_option(strLength)
// const increment2 = map_option(increment)
// console.log('===')
// console.log(strLength2(some('asdfasdf asfd asdf asf')))
// console.log(strLength2(none))

// console.log(increment2(some(3)))
// console.log(increment2(none))

// // const incrementLength = compose(increment2, strLength2)
// const incrementLength = compose(increment, strLength)

// const function1 = compose(map_option(increment), map_option(strLength))
// const function2 = map_option(incrementLength)
// console.log(function1(some('asdf')))
// console.log(function2(some('asdf')))

// // List
// const list1 = cons(`1`, cons(`44`, cons(`55`, nill)))

// const stringLength3 = map_list(strLength)

// console.log(showList(stringLength3(list1)))

// const increment3 = map_list(increment)
// console.log(showList(increment3(cons(1, cons(5, cons(55, nill))))))

// Either
const increment4 = map_either(increment)
console.log(increment4(right(34)))
console.log(increment4(left('Something wrong!')))
import { Functor1, listFunctor, optionFunctor } from "./hkt";
import { List, cons, nill } from "./list";
import { Option, some } from "./option";

type Double = (x: number) => number
const double: Double = (x: number) => x*2


const data1: Option<number> = some(12)
const output1 = optionFunctor.map(double)(data1)

// console.log(output1)

type ComposeR = <A,B,C>(f: (a: A)=>B, g: (b: B)=>C) => ((a: A)=>C)
const composeR: ComposeR = (f, g) => a => g(f(a))

const data2: Option<List<number>> = some(cons(1, cons(3, cons(33, nill))))
const mapO = optionFunctor.map
const mapL = listFunctor.map

const output2 = composeR(mapL, mapO)(double)(data2)

// console.log(JSON.stringify(output2, null, 2))

declare module 'fp-ts/HKT' {
  interface URItoKind<A> {
    'OptionList': Option<List<A>>
  }
}

const optionListFunctor: Functor1<'OptionList'> = {
  URI: 'OptionList',
  map: composeR(mapL, mapO)
}

const output3 = optionListFunctor.map(double)(data2)


// console.log(JSON.stringify(output3, null, 2))
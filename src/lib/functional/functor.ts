// Functional Programming - 23: Functor DEMO
// https://www.youtube.com/watch?v=N4mft_n06Wo&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=23

import { match } from "./match"
import { Option, none, some } from "./option"

type StringLength = (s: string) => number
const stringLength: StringLength = (s) => s.length

type OptionStringLength = (Fx: Option<string>) => Option<number>
const stringLengthOpt: OptionStringLength = Fx => 
  match(
    () => none,
    (value: string) => some(stringLength(value))
  )(Fx)


// Usage examples
console.log(stringLength(''))
console.log(stringLengthOpt('asdf'))
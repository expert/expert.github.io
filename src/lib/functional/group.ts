// Functional Programming - 21: Group demo
// https://www.youtube.com/watch?v=KSBx5PkP3ao&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=21

import { Monoid } from "./monoid";

interface Group<A> extends Monoid<A> {
  inverse: (a: A) => A
}

const addGroup: Group<number> = {
  concat: (x, y) => x + y,
  empty: 0,
  inverse: a => -a
}

// Example usage: 

const walletBallance = addGroup.concat(
  addGroup.empty,
  addGroup.concat(80,
    addGroup.concat(20, 
    addGroup.inverse(40)))
)

console.log(walletBallance)
type Encrypt = (plainText: string, key: number) => string
type Decrypt = (cipherText: string, key: number) => string

const alphabets = 'abcdefghijklmnopqrstuvwxyz'

const caesarGroup: Group<number> = {
  concat: (x, y) => (x + y) % alphabets.length,
  empty: 0,
  inverse: a => (alphabets.length - a) % alphabets.length
}

const encrypt: Encrypt = (plainText, key) => 
  plainText.toLowerCase().split('').map(c => {
    const index = alphabets.indexOf(c)
    if (index === -1) return c
    const newIndex = caesarGroup.concat(index, key)
    return alphabets[newIndex]
  }).join('')

const decrypt: Encrypt = (cipherText, key) => 
  encrypt(cipherText, caesarGroup.inverse(key))

// console.log(encrypt('alexei', 33))
console.log(encrypt('alexei', 3))
console.log(decrypt(encrypt('alexei', 3), 3))
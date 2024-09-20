// Functional Programming - 14: List, Linked List demo
// https://www.youtube.com/watch?v=XGLGn-sf8YQ&list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo&index=14
export type List<A> = Nill | Cons<A>

export interface Nill {
  _tag: 'Nill'
}
export interface Cons<A> {
  _tag: 'Cons',
  head: A,
  tail: List<A>
}

export const nill: List<never> = { _tag: 'Nill' }
export const cons = <A>(head: A, tail: List<A>): List<A> => ({
  _tag: 'Cons',
  head,
  tail 
})

export const isNill = <A>(xs: List<A>): xs is Nill => xs._tag === 'Nill'


// Usage Examples:

// const myList = cons(1, cons(3, cons(5, nill)))
// // console.log(JSON.stringify(myList, null, 2))

export type ShowList = <A>(xs: List<A>) => string
export const showList: ShowList = (xs): string => {
  return isNill(xs) 
    ? '' 
    : `${xs.head}${isNill(xs.tail) ? '' : ', ' + showList(xs.tail)}`
}

// console.log(showList(myList))
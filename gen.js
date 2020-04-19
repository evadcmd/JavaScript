function* gen() {
    for (let i of [1, 2, 3, 4])
        yield i**2 // lazy evaluation
    return 5
}

console.log(gen) // [GeneratorFunction: gen]
console.log(gen[Symbol.iterator]) // undefined
const g = gen()
console.log(g) // Object [Generator] {}
console.log(g[Symbol.iterator]) // [Function: [Symbol.iterator]]
console.log(g[Symbol.iterator]() === g) // true !!
/**
 * [GUESS]
 * 
 *  for (let x of [Iterable Obj]) {
 *      ...
 *  }
 *  適用於Iterable而不是Iterator
 * 
 *  呼叫Generator函數會產生Iterator
 *  const iterator = generator()
 *  for (let x of [Iterator Obj]) <= 不成立
 * 
 *  如果iterator自身也是iterable
 *  for (let x of generator())
 *  才會成立。
 * 
 *  因此 g[Symbol.iterator]() === g
 *  表示g也是iterable object。
 */

for (let x of g) {
    console.log(x)
}
 // >>> node gen.js
 // 1
 // 2
 // 3
 // 4
 // there is no 5!!!

 function* noYieldGen() {
     console.log('executed')
 }

 const g2 = noYieldGen() 

console.log(g2.next())

// executed
// {value: undefined, done: true}


// comparsion: execute obj[Symbol.iterator] (a generator) will return a iterator obj
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
};

console.log([...myIterable])
console.log(myIterable)

// comparsion: execute obj[Symbol.iterator] will return a iterator obj
const arr = ['a', 'b', 'c'];
const iter = arr[Symbol.iterator]();
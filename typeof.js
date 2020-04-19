
console.log( typeof 5 )
console.log( typeof 5.2 )
console.log( typeof Infinity )

console.log( typeof NaN ) // Symbol

console.log( typeof Symbol() )
console.log( typeof Symbol )
// console.log( typeof new Symbol() )
// TypeError: Symbol is not a constructor

console.log( typeof Array ) // object
/*
When Array is called as a function rather than as a constructor,
it creates and initialises a new Array object.
Thus the function call Array(…) is equivalent to the object creation expression new Array(…) with the same arguments.
*/
console.log( Array(5) )
console.log( new Array(5) )
console.log( typeof Array(5) )

console.log( typeof '' ) // string
console.log( typeof null ) // object
console.log( typeof undefined )
// console.log( typeof typeof undefined ) // string
console.log( typeof RegExp ) // function
console.log( typeof RegExp.prototype ) // object

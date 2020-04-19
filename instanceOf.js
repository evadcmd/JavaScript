// Number
console.log( 5 instanceof Number )
console.log( Infinity instanceof Number )
// NaN
console.log( NaN instanceof Symbol )
// String
console.log( 'hello world' instanceof String )

console.log( true instanceof Boolean )
/*
Strings and numbers are primitive values, not objects and therefore don't have a [[Prototype]], so it'll only work if you wrap them in regular objects (called 'boxing' in Java).
Also, as you noticed, String(value) and new String(value) do different things: If you call the constructor functions of the built-in types without using the new operator, they try to convert ('cast') the argument to the specific type. If you use the new operator, they create a wrapper object.
new String(value) is roughly equivalent to Object(String(value)), which behaves the same way as new Object(String(value)).
*/
console.log( new Number(5) instanceof Number )
console.log( new String(5) instanceof String )
console.log( new Boolean(true) instanceof Boolean )

console.log( Function instanceof Object )
console.log( Object instanceof Function )
console.log( Function instanceof Function )
console.log( Object instanceof Object )

// note object instanceof constructor: Symbol is not a constructor
console.log( Symbol() instanceof Symbol )
console.log( Symbol instanceof Symbol )
console.log( String instanceof Array )
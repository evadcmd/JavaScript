
console.log(Object.prototype)
console.log(Object.prototype.__proto__)
// console.log(Object.prototype.prototype) // undefined: object has no prototype

console.log(Function.__proto__)
console.log(Function.prototype)
// console.log(Function.prototype.prototype) // undefined: object has no prototype

// Array instances inherit from Array.prototype.
console.log(Array.isArray(Array.prototype))
console.log(Array.prototype.__proto__) // object

console.log(RegExp.prototype)
console.log(RegExp.prototype.__proto__) // object:W

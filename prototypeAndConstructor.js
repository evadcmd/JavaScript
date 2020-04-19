
const { prototype } = Object
// a deep clone of prototype and apply it to constructor ?
let obj = Object.call( prototype )
let obj2 = prototype.constructor()
let obj3 = new Object()

obj.x = 1
console.log(obj)
obj2.x = 2
console.log(obj2)
obj3.x = 3
console.log(obj3)

prototype.y = 2
console.log(obj.y)
console.log(obj2.y)
console.log(obj3.y)

console.log(obj.__proto__)

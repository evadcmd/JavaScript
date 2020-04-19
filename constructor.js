// function
function f( x ) {
    return x ** 3 
}
console.log( f( 2 ) )

// constructor
function Tata( x ) {
    this.age = x
}
let tata = new Tata( 33 )
console.log( tata )
// type
console.log( Tata.prototype ) // Object
console.log( Tata.__proto__ ) // function
console.log( Tata.__proto__.__proto__ ) // function

// some other example
function Dada( x ) {
    this.age = x
    return x
}

let dada = new Dada( 3 )
let returnDada = Dada( 3 )
console.log( dada )
console.log( returnDada )
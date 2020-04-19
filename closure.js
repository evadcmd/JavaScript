
function closure() {
    let x = 0
    return function( i ) {
        console.log( x = x + i )
    }
}

let c = closure()
let c2 = closure()
c(1)
c2(-2)
c(2)
c(3)
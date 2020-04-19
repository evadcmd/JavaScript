var a = 7
var a
console.log(a)

function hoistingTest(x) {
    var x
    return x
}

console.log( hoistingTest(8) )
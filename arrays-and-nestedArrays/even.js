function solve(ll) {
    let result = []
    for (let i = 0; i < ll.length; i++) {
        if (i % 2 === 0) {
            result.push(ll[i])
        }
    }
    return result.join(' ')

}

function solveShort(ll) {
    let result = []

    for (let i = 0; i < ll.length; i+=2) {
        result.push(ll[i])
    }

    return result.join(' ')
}

console.log(solve(['20', '30', '40', '50', '60']))
console.log(solveShort(['20', '30', '40', '50', '60']))
function solve(arr) {
    return arr.sort((a, b) =>
        a.length === b.length ?
            a.localeCompare(b) :
            a.length - b.length)
        .join('\n');
}

console.log(solve(['alpha',
    'beta',
    'gamma']
))
console.log()
console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
))
console.log()
console.log(solve(['test',
    'Deny',
    'omen',
    'Default']
))
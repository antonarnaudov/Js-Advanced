function solve(arr, num) {
    // num %= arr.length
    for (let i = 0; i < num % arr.length; i++) {
        arr.unshift(arr.pop())
    }
    return arr.join(' ')
}

console.log(solve(['1',
        '2',
        '3',
        '4'],
    2
))
console.log(solve(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
))
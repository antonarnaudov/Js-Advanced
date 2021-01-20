function solve(input) {
    input.sort((a, b) => a - b);
    // return input.slice(-Math.ceil(input.length / 2))
    return input.slice(input.length / 2)
// slice floor-va drobnite chisla
}

console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))
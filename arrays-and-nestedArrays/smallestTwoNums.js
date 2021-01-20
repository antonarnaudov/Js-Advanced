function solve(input) {
    input.sort((a, b) => a - b);
    return input.slice(0, 2)
}

console.log(solve([30, 15, 50, 5]))
function solve(input) {
    const result = []
    input.forEach((x, i) => {
        if ((i + 1) % 2 === 0) {
            result.push(x * 2)
        }
    });
    return result.reverse()
}

console.log(solve([10, 15, 20, 25]))
console.log(solve([3, 0, 10, 4, 7, 3]))

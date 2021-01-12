function solve(x, y) {
    if (y == 0) {
        return Number(x)
    } else {
        x = x % y
        return solve(y, x)
    }
}

console.log(solve(15, 5))
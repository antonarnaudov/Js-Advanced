function solve(matrix) {
    for (let row in matrix) {
        let colSum = 0
        let rowSum = matrix[row].reduce((acc, c) => acc + c, 0)
        for (let col in matrix) {
            colSum += matrix[matrix.length - 1 - row][col]
        }
        if (rowSum !== colSum) {
            return false
        }
    }
    return true
}


console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
))

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
))
console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
))
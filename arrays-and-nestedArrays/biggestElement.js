/**
 * @param {number[][]} input
 */
function solve(input) {
    const result = input.reduce((acc, x) => acc.concat(x));
    return Math.max(...result)
}

console.log(solve(
    [[20, 50, 10], [8, 33, 145]]
))

console.log(solve(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
))

// function solve(input) {
//     let maxNum = 0
//     input.forEach(x => {
//         let max = Math.max(...x)
//         if (max > maxNum) {
//             maxNum = max
//         }
//     })
//     return maxNum
// }
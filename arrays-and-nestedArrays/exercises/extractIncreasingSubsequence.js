function solve(arr) {
    const result = [arr[0],]
    for (let num of arr) {
        if (num > result.slice(-1)) {
            result.push(num)
        }
    }
    return result
}

function solve2(arr) {
    return arr.reduce((acc, c) => {
        if (acc.slice(-1) < c) {
            acc.push(c)
        }
        return acc
    }, [arr[0]])
}


console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))

console.log(solve([1,
    2,
    3,
    4]
))

console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
))
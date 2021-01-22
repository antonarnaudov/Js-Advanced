function solve(list, n) {
    let result = []
    for (let i = 0; i < list.length; i += n) {
        if (i > list.length) {
            i -= list.length + 1
        }
        result.push(list[i])
    }
    return result
}

function solve2(arr, step) {
    return arr.filter((_, i) => i % step === 0)
}

console.log(solve2(['5',
        '20',
        '31',
        '4',
        '20'],
    2
))

console.log(solve2(['dsa',
        'asd',
        'test',
        'tset'],
    2
))

console.log(solve(['1',
        '2',
        '3',
        '4',
        '5'],
    6
))
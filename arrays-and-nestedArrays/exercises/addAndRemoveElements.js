function solve(list) {
    let number = 1
    let result = []
    list.forEach(x => {
        if (x === 'add') {
            result.push(number)
        } else {
            result.pop()
        }
        number++
    })

    return result.length > 0 ? result.join('\n') : 'Empty'
}

console.log(solve(['add',
    'add',
    'add',
    'add']
))

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
))

console.log(solve(['remove',
    'remove',
    'remove']
))
function solve(list, separator) {
    return list.join(separator)
}

console.log(solve(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
))

console.log(solve(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
    '_'
))
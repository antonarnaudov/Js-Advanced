function solve(text) {
    const regex = /[a-zA-Z]/gm;
    const array = text.split(regex)
    let result = []

    array.forEach(word => {
        let newWord = word.match(regex).join('').toUpperCase()
        result.push(newWord)
    })

    return result.join(', ')
}

console.log(solve('Hi, how are you?'))
console.log(solve('Functions in JS can be nested, i.e. hold other functions'))
function solve(...items) {
    let result = ''
    let typeCount = {}
    items.forEach(item => {
        result += `${typeof item}: ${item}\n`
        if (typeCount[typeof item]) {
            typeCount[typeof item] += 1
        } else {
            typeCount[typeof item] = 1
        }
    })
    for (let [key, value] of Object.entries(typeCount)) {
        result += `${key} = ${value}\n`
    }
    return console.log(result.trim())
}

solve('cat', 42, function () { console.log('Hello world!'); })
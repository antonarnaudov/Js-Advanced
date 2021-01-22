function solve(array) {
    return array.sort((a, b) => a.localeCompare(b))
        .forEach((name, index) =>
            console.log(`${index + 1}.${name}`))
}

console.log(solve(["John", "Bob", "Christina", "Ema"]))
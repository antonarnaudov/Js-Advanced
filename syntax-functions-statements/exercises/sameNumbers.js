function solve(number) {
    const numbers = String(number).split('')
    let sum = 0;
    let areTheSame = true

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i + 1] && numbers[i + 1] !== undefined) {
            areTheSame = false
        }
        sum += Number(numbers[i])
    }

    console.log(areTheSame)
    console.log(sum)
}

solve(2222222)
solve(1234)
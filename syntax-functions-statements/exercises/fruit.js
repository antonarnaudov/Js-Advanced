function solve(fruit, weightGr, priceKg) {
    const weight = weightGr / 1000
    const money = priceKg * weight

    return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
}

console.log(solve('orange', 2500, 1.80))
console.log(solve('apple', 1563, 2.35))
function area() {
    return Math.abs(this.x * this.y)
}

function vol() {
    return Math.abs(this.x * this.y * this.z)
}

function solve(area, vol, inputAsJson) {
    return JSON.parse(inputAsJson).map(el => {
        return {
            area: area.call(el),
            volume: vol.call(el)
        }
    })
}


let input1 = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`

console.log(solve(area, vol, input1))
function pow(power, num) {
    return num ** power
}

const sqr = pow.bind(null, 2)


console.log(pow(2, 3))
console.log(sqr(3))


function createElement(type, content) {
    const newElement = document.createElement(type)
    if (typeof content === 'string') {
        newElement.textContent = content
    } else {
        newElement.appendChild(content)
    }
    return newElement
}

const createDiv = createElement.bind(null, 'div')
const createP = createElement.bind(null, 'p')

createDiv(createElement('p', 'exoexo'))
createDiv(createP('exoexo'))
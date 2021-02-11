function solve() {
    const [input, output] = [...document.querySelectorAll('input')]
    const table = document.querySelector('table.table tbody')

    const [generateBtn, buyBtn] = [...document.querySelectorAll('button')]
    generateBtn.addEventListener('click', () => {
        const furnitureArray = JSON.parse(input.value.trim())
        table.innerHTML = ''
        console.log(furnitureArray)
        JSON.parse(furnitureArray).forEach(f => output.appendChild(createRow(f)))
    })

    function createRow(data) {
        return createElement('tr', createElement('td', 'hi'))
    }


    function createElement(type, content) {
        const newElement = document.createElement(type)
        if (typeof content === 'string') {
            newElement.textContent = content
        } else {
            newElement.appendChild(content)
        }
        return newElement
    }
}

//{
//    "img":"https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg",
//    "name": "Office chair",
//    "price": "160",
//    "decFactor":"0.5"
//},
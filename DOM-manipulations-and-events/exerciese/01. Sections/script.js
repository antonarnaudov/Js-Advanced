function create(words) {
    const content = document.getElementById('content')

    words.forEach((w) => {
        const paragraph = createElement('p', w)
        paragraph.style.display = 'none'

        const div = createElement('div', paragraph)
        content.appendChild(div)
    })

    content.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'DIV') {
            ev.target.querySelector('p').style.display = 'block'
        }
    })

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

// With Closure
function create1(words) {
    const content = document.getElementById('content')

    words.forEach((w) => {
        const paragraph = createElement('p', w)
        paragraph.style.display = 'none'

        const div = createElement('div', paragraph)
        // Closure let's us use paragraph.
        div.addEventListener('click', ev => {
            paragraph.style.display = ''
        })
        content.appendChild(div)
    })

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
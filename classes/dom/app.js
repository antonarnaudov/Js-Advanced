class Modal {
    constructor(message, parent) {
        this.message = message;
        this.element = this._initialise()
        this.render(parent)
    }

    _initialise() {
        const container = createElement('div',
            createElement('p', this.message),
            button('OK', this.onClose.bind(this))
        )

        container.classList.add('modal')

        return container
    }

    onClose() {
        this.element.remove()
    }

    render(parent) {
        parent.appendChild(this.element)
    }
}

document.getElementById('createBtn').addEventListener('click', (ev) => {
    const main = document.querySelector('main')

    const myModal = new Modal('It Works', main)

    // myModal.render(main)
})

function button(label, callback) {
    const element = createElement('button', label)
    element.addEventListener('click', callback)
    return element
}

function createElement(type, ...content) {
    const result = document.createElement(type)
    content.forEach(element => {
        if (typeof element === 'string') {
            const node = document.createTextNode(element)
            result.appendChild(node)
        } else {
            result.appendChild(element)
        }
    })
    return result
}
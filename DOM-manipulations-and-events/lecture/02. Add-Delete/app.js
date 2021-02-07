function addItem() {
    // get input field
    const input = document.getElementById('newItemText')

    // create li and btn elements
    const liElement = createElement('li', input.value)
    const deleteBtn = createElement('a', '[Delete]')

    // add button to li
    liElement.appendChild(deleteBtn)

    // make button clickable
    deleteBtn.href = '#'

    // add deleting functionality to btn
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove()
    })

    // add li to ul
    document.getElementById('items').appendChild(liElement)

    // clear input field
    input.value = ''

    /**
     * This CONSTRUCTOR function optimises
        the process of new element creation
     */
    function createElement(type, content) {
        const element = document.createElement(type)
        element.textContent = content
        return element
    }
}
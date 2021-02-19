function solution() {
    const [_, listOfGiftsSection, sentGiftsSection, discardedGiftsSection] = document.querySelectorAll('section')
    let listOfGifts = [];

    document.querySelector('.container').addEventListener('click', (ev) => {
        if (ev.target.tagName === 'BUTTON') {
            const button = ev.target.textContent;

            if (button === 'Add gift') {
                const gift = document.querySelector('input')
                if (gift.value !== '') {
                    addGift(gift.value)
                    gift.value = ''
                }

            } else if (button === 'Send') {
                sendOrDiscardGift(ev.target.parentNode, sentGiftsSection)

            } else if (button === 'Discard') {
                sendOrDiscardGift(ev.target.parentNode, discardedGiftsSection)
            }
        }

    })

    function addGift(giftText) {
        const sendButton = createElement('button', 'Send')
        sendButton.className = 'sendButton'
        const discardButton = createElement('button', 'Discard')
        discardButton.className = 'discardButton'

        const li = createElement('li', giftText, sendButton, discardButton)
        li.className = 'gift'

        listOfGifts.push({li, name: giftText})

        const ul = listOfGiftsSection.querySelector('ul')

        listOfGifts.sort((a, b) => a.name.localeCompare(b.name)).forEach(el => ul.appendChild(el.li))
    }

    function sendOrDiscardGift(giftLi, ulParent) {
        const giftName = listOfGifts.find(el => el.li === giftLi).name;
        console.log(giftName)
        //remove item from List of gifts
        removeLi(giftName, giftLi)

        const li = createElement('li', giftName)
        li.className = 'gift'

        ulParent.querySelector('ul').appendChild(li)
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

    function removeLi(name, li) {
        const giftIndex = listOfGifts.indexOf(listOfGifts.find(el => el.name === name))
        listOfGifts.splice(giftIndex, 1)
        li.remove()
    }
}
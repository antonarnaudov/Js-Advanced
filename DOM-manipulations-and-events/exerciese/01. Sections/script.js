function create(words) {
    const content = document.getElementById('content')
    words.forEach((w) => {
        const div = document.createElement('div')
        const paragraph = document.createElement('p')
        paragraph.textContent = w
        paragraph.style.display = 'none'
        div.appendChild(paragraph)
        content.appendChild(div)
    })

    content.addEventListener('click', (ev) => {
        const paragraphs = document.querySelectorAll('div p')
        if (ev.target.tagName === 'DIV') {
            paragraphs.forEach((p) => {
                p.style.display = 'block'
            })
        } else {
            paragraphs.forEach((p) => {
                p.style.display = 'none'
            })
        }
    })
}
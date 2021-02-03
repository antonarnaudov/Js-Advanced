function solve() {
    const text = document.getElementById('text').value.toLowerCase().split(' ')
    const namingConvention = document.getElementById('naming-convention').value
    const result = []

    if (namingConvention === 'Camel Case') {
        for (let i = 1; i < text.length; i++) {
            let word = text[i].split('')
            word[0] = word[0].toUpperCase()
            text[i] = word.join('')
        }
        document.getElementById('result').textContent = text.join('')
    } else if (namingConvention === 'Pascal Case') {
        for (let i = 0; i < text.length; i++) {
            let word = text[i].split('')
            word[0] = word[0].toUpperCase()
            text[i] = word.join('')
        }
        document.getElementById('result').textContent = text.join('')
    } else {
        document.getElementById('result').textContent = 'Error!'
    }
}
function deleteByEmail1() {
    let rows = Array.from(document.querySelectorAll('tbody tr'))

    const input = document.querySelector('input[name="email"]').value
    const resultElement = document.getElementById('result')
    let isDeleted = false

    for (let row of rows) {
        if (row.children[1].textContent === input) {
            row.parentNode.removeChild(row)
            isDeleted = true
            resultElement.textContent = 'Deleted.'
        }
    }

    if (isDeleted === false) {
        resultElement.textContent = 'Not found.'
    }
}

function deleteByEmail() {
    let rows = Array.from(document.querySelectorAll('tbody tr'))

    const input = document.querySelector('input[name="email"]').value
    const resultDiv = document.getElementById('result')

    const matches = rows.filter(r => r.children[1].textContent === input)[0]
        // children[1] takes the email
        // filter returns list with one result on [0] index

    if (matches) {
        matches.parentNode.removeChild(matches)
        resultDiv.textContent = 'Deleted.'
    } else {
        resultDiv.textContent = 'Not found.'
    }
}
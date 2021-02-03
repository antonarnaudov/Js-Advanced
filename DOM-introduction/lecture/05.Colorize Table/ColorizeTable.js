function colorize1() {
    const rows = document.getElementsByTagName('tr');

    for (let i in rows) {
        if (i % 2 !== 0) {
            rows[i].style.backgroundColor = 'Teal'
        }
    }
}


function colorize() {
    [...document.querySelectorAll
    ('table tr:nth-child(even)')]
        .forEach(e => e.style.backgroundColor = 'teal')
}
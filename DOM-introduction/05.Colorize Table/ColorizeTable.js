function colorize() {
    const rows = document.getElementsByTagName('tr');

    for (let i in rows) {
        if (i % 2 !== 0) {
            rows[i].style.backgroundColor = 'Teal'
        }
    }
}
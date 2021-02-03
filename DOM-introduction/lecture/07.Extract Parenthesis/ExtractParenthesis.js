function extract(id) {
    const regex = /\((.+?)\)/gm;
    const content = document.getElementById(id).textContent
    let match = regex.exec(content)
    while (match != null){
        console.log(match[1])
        match = regex.exec(content)
    }
}
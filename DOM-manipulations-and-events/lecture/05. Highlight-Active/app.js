function focused() {
    function onFocus(ev) {
        // ev.target.parentNode.classList.add('focus')
        ev.target.parentNode.className = 'focus'
    }

    function onBlur(ev) {
        ev.target.parentNode.className = ''
        // ev.target.parentNode.classList.remove('focus')
    }

    document.querySelectorAll('input').forEach(el => {
        el.addEventListener('focus', onFocus)
        el.addEventListener('blur', onBlur)
    })
}
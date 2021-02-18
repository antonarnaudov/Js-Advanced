function solve() {
    let modules = {}; //{lectureModule: {module, ul, lis}}

    document.querySelector('main').addEventListener('click', (ev) => {
        if (ev.target.tagName === 'BUTTON') {
            if (ev.target.className === 'red') {
                deleteLecture(ev.target)
            } else {
                let lectureName = document.querySelector('form input[name=lecture-name]')
                let lectureDate = document.querySelector('form input[name=lecture-date]')
                let lectureModule = document.querySelector('form select[name=lecture-module]')

                if (lectureName.value !== '' && lectureDate.value !== '' && lectureModule.value !== 'Select module') {
                    add(lectureName.value, lectureDate.value, lectureModule.value)
                    ev.preventDefault()
                    lectureName.value = ''
                    lectureDate.value = ''
                    lectureModule.value = 'Select module'
                }
            }
        }
    })

    function add(lectureName, lectureDate, lectureModule) {
        const h4 = createElement('h4', `${lectureName} - ${fixDate(lectureDate)}`)
        const button = createElement('button', 'Del')
        button.className = 'red'

        const li = createElement('li', h4, button)
        li.className = 'flex'

        let ul;
        let module;
        let lis;

        // if module doesnt exists
        if (!modules[lectureModule]) {
            const h3 = createElement('h3', `${lectureModule.toUpperCase()}-MODULE`)
            ul = createElement('ul')

            module = createElement('div', h3, ul)
            module.className = 'module'

            lis = []
            modules[lectureModule] = {module, ul, lis}

        } else {
            // if lecture does not exist exists in module
            module = modules[lectureModule].module
            ul = modules[lectureModule].ul
            lis = modules[lectureModule].lis
        }

        lis.push({li, date: lectureDate})
        lis.sort((a, b) => a.date.localeCompare(b.date)).forEach(({li}) => ul.appendChild(li))

        document.querySelector('.user-view .modules').appendChild(module)
    }

    function deleteLecture(el) {
        const ulWithoutElementLength = el.parentNode.parentNode.querySelectorAll('li').length - 1
        if (ulWithoutElementLength === 0){
            const module = el.parentNode.parentNode.parentNode
            module.remove()
        } else {
            //remove element
            el.parentNode.remove()
        }
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

    function fixDate(lectureDate) {
        let [date, time] = lectureDate.split('T')
        date = date.replaceAll('-', '/')
        return `${date} - ${time}`.trim()
    }
}
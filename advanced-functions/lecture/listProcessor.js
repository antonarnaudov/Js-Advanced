function solve(commandArr) {
    const strings = []

    commandArr.forEach(e => {
        const [command, string] = e.split(' ')
        if (command === 'add') {
            strings.push(string)
        } else if (command === 'remove') {
            for (let i = 0; i < strings.length; i++) {
                if (strings[i] === string) {
                    strings.splice(i, 1)
                }
            }
        } else if (command === 'print'){
            console.log(strings.join(','))
        }
    })
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])
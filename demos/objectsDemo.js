let obj = {baba: 'Vanq', dqdo: 'Pesho', age: 3, me: 'Conko'}
let {baba: myBaba, age: myAge, ...rest} = obj
console.log(myBaba, myAge, rest)

for (const objKey in obj) {
    console.log(`key ${objKey} => value ${obj[objKey]}`)
}
console.log()

const keys = Object.keys(obj)
const values = Object.values(obj)
console.log(keys.join(' '))
console.log(values.join(' '))

console.log()
const entries = Object.entries(obj)
console.log(entries)
for (const [key, value] of entries) {
    console.log(`key ${key} => value ${value}`)
}

console.log()
for (const [key, value] of Object.entries(obj)) {
    console.log(`key ${key} => value ${value}`)
}


const mathObj = {
    increase(num) {
        num++;
    },
    decrease(num) {
        num--;
    },
    sum(arr) {
        return arr.reduce((acc, c) => acc + c);
    },
}

const ll = [1,2,3,4,5,6,7,8,9]
console.log(mathObj.sum(ll))

//-------------------------------------------------------

console.log()
function createRect(width, height) {
    const rect = {width, height};

    rect.getArea = () => {
        return rect.width * rect.height
    }

    return rect
}

console.log(createRect(15, 10))
console.log(createRect(15, 10).getArea())

//-------------------------------------------------------

function canPrint(device) {
    device.print = () => {
        console.log(`${device.name} is printing a page`)
    }
}

const printer = {name: 'ACME Printer'}
canPrint(printer);
printer.print();

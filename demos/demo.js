'use strict';

function printStars(count = 5) {
    return '*'.repeat(count);
}

console.log(printStars())
console.log(printStars(7));

// comment
/*
multiline
comment
*/

/**
 * Documentation
 * is written
 * like that
 * ALT + SHIFT + F = CTRL + ALT + L
 *          VsCode = WebStorm
 */

console.log(3 > 4 ? 8 : 4)

let ll = [1, 2, 3, 4, 5]

ll[6] = 8
ll.pop()
ll.pop()
console.log(`\nPop ${ll}`)

ll = [1, 2, 3, 4, 5, 6, 7, 8]
ll.fill(0, 5, 13)
console.log(`\nFill ${ll}`)

ll = [1, 2, 3, 4, 5, 6, 7, 8]
ll.splice(3, 1, 17)
console.log(`\nSplice ${ll}`)

ll = [7, 6, 1, 3, 5, 2, 13]
console.log(`\nBefore sort ${ll}`)
console.log(`After pure sort ${ll.sort()}`)
ll.sort((a, b) => a - b);
console.log(`After number sort ${ll}`)

ll = ['Peter', 'george', 'John', 'Marv', 'Alice', 'Bob']
console.log(`\nBefore sort ==> ${ll}`)
console.log(`After pure sort lead by ascii positions ==> ${ll.sort()}`)
ll.sort((a, b) => a.localeCompare(b));
console.log(`After alphabetical sort ==> ${ll}`)

const find = ll.find(x => x[0] === 'g')
console.log(`Find function ${find}`)

ll = [1, 2, 3, 4, 5, 6, 7, 8]
const filter = ll.filter(x => x % 2 === 0)
console.log(`Filter function ${filter}`)

console.log('Num array to strings')
console.log(ll)
const llStrings = ll.map(String)
console.log(llStrings)

const grosomeMapper = llStrings.map(Number).map(x => x + 1)
console.log('Grosome mapper',grosomeMapper)

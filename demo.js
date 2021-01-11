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
 */

console.log(3 > 4 ? 8 : 4)
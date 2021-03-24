/**
 * Collections are called Map()-s
 * Maps are === dictionaries from Python
 */

// or mu_dict
const myMap = new Map()

myMap.set('Peter', '+1-555-4981');
myMap.set('John', '+1-555-7879');

console.log(myMap, 1)

console.log(myMap.get('Peter'), 2);
myMap.set('Peter', '+359-879-789-4636')
console.log(myMap, 3)

myMap.set('Ivan', 21)
console.log(myMap.get('Ivan'), 4)

// returns key, value pairs
for (let [key, value] of myMap.entries()) {
    console.log(key, '=>', value, 5)
}

// returns key, value pairs as arrays in array
let arrMap = Array.from(myMap)
console.log(arrMap, 6)

// .size works like .length on arrays
console.log(myMap.size, 7)

// .has(key)
console.log(myMap.has('Peter'), 8)


/* KEYS, VALUES AND ENTRIES RETURN ITERATOR
THE ITERATOR CAN BE ITERATED ONLY 1 TIME */

// .keys() returns the keys
console.log(myMap.keys(), 9)

// .values() returns the values
console.log(myMap.values(), 10)

// .entries() returns the keys and the values
console.log(myMap.entries(), 11)

// delete(key)
myMap.delete('Peter')
console.log(myMap, 12)

// clear() cleans the whole Map
myMap.clear()
console.log(myMap, 13)


// Map can NOT be SORTED
let map = new Map()
map.set('one', 1)
map.set('eight', 8)
map.set('two', 2)

let sorted = Array.from(map).sort((a, b) => a[1] - b[1])
sorted.forEach(el => console.log(el[0], '=>', el[1]))

// Set expects Array
let set = new Set([1, 2, 3, 4, 4, 5])
console.log(set)
set.add('x')
console.log(set)
set.delete(3)
console.log(set)
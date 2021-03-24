/**
 * Collections are called Map()-s
 * Maps are === dictionaries from Python
 */

// or mu_dict
const myMap = new Map()

myMap.set('Peter', '+1-555-4981');
myMap.set('John', '+1-555-7879');

console.log(myMap)

console.log(myMap.get('Peter'));
myMap.set('Peter', '+359-879-789-4636')
console.log(myMap)

myMap.set('Ivan', 21)
console.log(myMap.get('Ivan'))

for (let [key, value] of myMap.entries()) {
    console.log(key, '=>', value)
}
// returns key, value pairs
console.log(Array.from(myMap))

// .size works like .length on arrays
console.log(myMap.size)

// .has(key)
console.log(myMap.has('Peter'))

// delete(key)
myMap.delete('Peter')
console.log(myMap)

// clear() cleans the whole Map
myMap.clear(myMap)
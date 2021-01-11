function aggregateElements(array) {
    let sum = 0
    let reverseSum = 0
    let concat = ''

    array.forEach(element => {
        sum += element
        reverseSum += 1 / element
        concat += String(element)
    });

    console.log(sum)
    console.log(reverseSum)
    console.log(concat)
}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])
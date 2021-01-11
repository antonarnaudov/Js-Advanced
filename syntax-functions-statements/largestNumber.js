function largestNumber(...params) {
    let largestNum = -999999999

    params.forEach(number => {
        if (number > largestNum) {
            largestNum = number
        };
    });

    console.log(`The largest number is ${largestNum}.`)
}


largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)
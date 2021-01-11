function squareOfStars(number = 5) {
    for (let index = 0; index < number; index++) {
        console.log('* '.repeat(number))
    }
}

squareOfStars(1)
squareOfStars(2)
squareOfStars(5)
squareOfStars()
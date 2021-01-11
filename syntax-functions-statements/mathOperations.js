// function mathOperations(a, b, operator) {
//     console.log(eval(`${a} ${operator} ${b}`))
// }

function mathOperations(a, b, operator) {
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;

        case '-':
            result = a - b;
            break;

        case '/':
            result = a / b;
            break;

        case '*':
            result = a * b;
            break;

        case '%':
            result = a % b;
            break;

        case '**':
            result = a ** b;
            break;

    }
    console.log(result)
}


mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')
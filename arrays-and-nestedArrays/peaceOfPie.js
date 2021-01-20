function solve(list, targetFlavor1, targetFlavor2) {
    const index1 = list.indexOf(targetFlavor1)
    const index2 = list.indexOf(targetFlavor2) + 1
    return list.slice(index1, index2)
}

console.log(solve(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
))

console.log(solve(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
))
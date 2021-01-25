function solve(arr) {
    const result = {};
    for (const element of arr) {
        let [town, population] = element.split(' <-> ');
        population = Number(population);

        if (result.hasOwnProperty(town)) {
            population += result[town];
        }

        result[town] = population;
    }
    Object.entries(result).forEach(([key, value]) =>
        console.log(`${key} : ${value}`));
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)
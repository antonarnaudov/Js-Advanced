function filterEmployees(data, criteria) {
    const parsedData = JSON.parse(data);
    let result = ''

    if (criteria !== 'all'){
        const [key, value] = criteria.split('-')
        const filteredData = parsedData.filter(d => d[key] === value)

        filteredData.forEach((d, c) => result += `${c}. ${d['first_name']} ${d['last_name']} - ${d['email']}\n`)
    } else {
        parsedData.forEach(d => result += `${d['id'] - 1}. ${d['first_name']} ${d['last_name']} - ${d['email']}\n`)
    }

    return result.trim()
}

console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
))

console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'

))
class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} 
        (age: ${this.age}, email: ${this.email})`
    }
}

// Using _x doesn't change anything
// It's a 'private' variable convention
module.exports = Person

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`${this.name} says hi!`)
    }
    /*
    static methods are available only in the class
    if you try to access them from an instance it will return error
    !IMPORTANT!
    They dont have access to this
    */
    static myStaticMethod() {
        console.log('FROM STATIC METHOD', this)
    }
}
const myLiteral = {
    name: 'George',
    sayHi() {
        console.log(`${this.name} says hi!`)
    }
}

const myInstance = new MyClass('Peter');
const otherInstance = new MyClass('John');

console.log(myLiteral);

console.log(myInstance);
console.log(otherInstance);

myInstance.sayHi();
otherInstance.sayHi();

const myFunc = myInstance.sayHi.bind(myInstance);
myFunc();
myLiteral.sayHi();

MyClass.staticName = 'John'
console.log(MyClass.myStaticMethod())


function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Hello, my name is ${name} and my age is ${age}.`);
    };
}

let person1 = new Person("kunal", 20);
let person2 = new Person("breann", 22);
let output = person2.sayHello();
console.log(output);
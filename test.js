"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const userKeys = ["name", "age", "email"];
console.log("Hello World!");
console.log(userKeys);
class Person {
    name;
    age;
    #email;
    constructor(name, age = 30, email = "example@example.com") {
        this.name = name;
        this.age = age;
        this.#email = email;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getEmail() {
        return this.#email;
    }
}
const person = new Person("Jane");
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
console.log(getProperty(person, "email"));
console.log(person.name);

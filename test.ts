interface User {
  name: string;
  age: number;
  email: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type UserKeys = keyof User;
const userKeys: UserKeys[] = ["name", "age", "email"];
console.log("Hello World!");
console.log(userKeys);

class Person {
  public name: string;
  public age: number;
  #email: string;

  public constructor(name: string, age: number = 30, email: string = "example@example.com") {
    this.name = name;
    this.age = age;
    this. #email = email;
  }

  public getName(): string {
    return this.name;
  }
  public getAge(): number {
    return this.age;
  }
  public getEmail(): string {
    return this.#email;
  }
}

const person = new Person("Jane");

console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
console.log(getProperty(person, "email"));

console.log(person.name);
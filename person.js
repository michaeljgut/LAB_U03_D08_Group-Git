class Person {
  constructor(name, age) {
    this.name = name || 'John Smith';
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
}

class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`)
  }
}

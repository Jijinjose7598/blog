class Person {
  constructor(name, age, gender, occupation) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.occupation = occupation;
  }

  toString() {
      return `Name: ${this.name},
     Age: ${this.age},
      Gender: ${this.gender},
       Occupation: ${this.occupation}`;
  }
}


const person1 = new Person("Jijin", 25, "Male", "Engineer");
console.log(person1.toString()); // Output: Name: John Doe, Age: 30, Gender: Male, Occupation: Engineer

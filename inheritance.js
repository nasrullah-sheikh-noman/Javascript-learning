class Human {
  constructor (name) {
    this.name = name;
    this.leg = 2;
    this.arms = 2;
  }
}

class Baby extends Human {
  constructor(name, age) {
    super(name);
    this.age = age;
    this.cute = true;
  }
}

const bebs = new Baby("pihu", 8);

console.log(bebs.name);
console.log(bebs.age);
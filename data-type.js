// Data type 
// Primitive data type 
// Non-primitive data type

// Call Stack = primitive data type
// Heap = non-primitive data type

// primitive data type = string, boolean, number, bigInt, null, undefined, symb
// non-primitive data type = object, array

// text for object
let people = {
  name: 'noman',
  age: '21'
}

let info = people;
info = {
  name: 'nasrullah',
  age: '18'
}

console.log(info)
console.log(people)



let people1 = {
  name: 'noman',
  age: '17'
}
let people2 = people1;
people2.name = 'ns noman'
people2.age = '18'

console.log(people1)
console.log(people2)


// text for array 

// let car = ["BMW", "Audi"];

// let newcar = car;
// newcar = ["Toyota", "Marcitize"]

// console.log(car)
// console.log(newcar)

let car = ["BMW", "Audi"];

let newcar = car;
newcar[0] = "Toyota"
newcar[1] = 'marcitize'

console.log(car)
console.log(newcar)

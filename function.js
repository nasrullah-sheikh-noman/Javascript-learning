// Javascript Function 

// Code Driven Invocation

// function myFunction (name , age = 21 , role = "Software Developer", department = "CSE") {
//   console.log("Hello " + name + ".", "You are selected for " + role + "." + " Your age is " + age + "." +  " Your department in " + department + ".");
// }

// myFunction("Nasrullah" );
// // myFunction('noman');


// Event-Driven Invocation

// function btn() {
//   console.log('You are logged in.')
// }

// document.getElementById('btn').addEventListener('click', btn);


// Automatic(self-driven) Invocation

// (function(message) {
//   console.log('I am self-invokeing Function.', message)
// })('Hello!');



// variables using function 

// let maths = function(x, y) {
//   return x * y ;
// }
// console.log(maths(8, 9));
// console.log(maths(6, 4));


// annonomous function 

// let numbers = [2, 5, 9, 6, 7, 3, 8];
// let sqNumbers = numbers.map(function(number) {
//   return number * number;
// });

// console.log(sqNumbers);



// let add = function(x, y) {
//   return x + y
// };
// console.log(add(5 , 9));


//  Arrow Function 

// let add = (x, y) => x + y ;
// console.log(add(3, 9));


//  Nested Function

// function hello (firstName) {
//   function hi () {
//     alert('Hello ' + firstName);
//   }
//   return hi();
// }
// hello('Noman');


// javascript object 

// const mobileModel = {
//   brand : "samsung",
//   model : "s24 ultra",
//   processor : "snapdragon gen 3",
//   camera : "200MP, 12MP, 12MP",
//   'zoom camera' : "true",
//   'selfie camera' : "12MP",
//   brandModel : function () {
//     return `This mobile Brand is ${this.brand}. This mobile model is ${this.model}. This mobile processor is ${this.processor}. `
//   },
//   battary : {
//     mah : 5000,
//   }
// }

// console.log(mobileModel.battary.mah);
// console.log(mobileModel.brandModel())
// Object.freeze(mobileModel);
// mobileModel.model = 's25 ultra'
// mobileModel['zoom camera'] = '22MP';

// let model = mobileModel.hasOwnProperty('model');
// console.log(Object.values(mobileModel));
// console.log(mobileModel)

// console.log(model);
// console.log(mobileModel['zoom camera'])


// symbol use in javascript object

// const symbol = Symbol();

// const object = {
//   [symbol] : 'symbol2'
// }
// console.log(object)
// console.log(object[symbol]);



// const obj1 = {
//   a : 9,
//   b : 8,
//   c : 7
// }
// const obj2 = {
//   d : 6,
//   e : 5,
//   f : 4
// }
// const obj3 = {
//   g : 3,
//   h : 2, 
//   i : 1
// }

// // const finalObject = Object.assign(obj1, obj2, obj3) // bad practice
// // const finalObject = Object.assign({}, obj1, obj2, obj3) // Good practice
// const finalObject = {...obj1, ...obj2, ...obj3};
// console.log(finalObject);


// Contructor Object 

// function Person (first, last) {
//   this.firstName = first,
//   this.lastName = last
// }

// const person1 = new Person('Nasrullah Sheikh', 'Noman');
// person1.age = 18;
// person1.dept = 'CSE';
// const person2 = new Person('Noman Sheikh', 'Nasrullah');
// console.log(person1);
// console.log(person2);
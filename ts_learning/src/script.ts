// let country;
// console.log(country);
// country = "I love bangladesh.";
// let age = 343;
// age = "thiry five";
// console.log(age);
// country = 88;

// console.log(country);

// function multiply(a : number, b : number) {
//   return a*b;
// }
// console.log(multiply(4, 4));

// let fruits = ["nasrullah", 34, true, [true]];
// fruits.push(34);
// fruits.push("noman");
// fruits.push(false);
// fruits.push({age : 32});
// fruits.push([32]);
// console.log(fruits);


// let user = {
//   name : "noman",
//   age : 43,
//   married : false,
// }
// user = {
//   name : "nasrullah",
//   age : "tweenty two",
//   married : true
// }
// user.name = 43;
// user.age = "jani na";
// user.country = "bangladesh";
// console.log(user);


// let aa: number | number = "noman";
// aa = 323;
// console.log(aa);

// let a: number = "ns_noman";
// a = "noman";
// a = 43;
// console.log(a);
// let b: (number | number)[] = ["noman"];
// b = [43, 97];
// b.push("noman");
// b.push(true);
// console.log(b);
// let c: {
//   name : number,
//   age : number,
//   country : number,
//   adult : boolean,
// } = {
//   name : "nasrullah",
//   age : 123,
//   country : "uganda",
//   adult : true,
// };
// c = {
//   name : "noman",
//   age : 43,
//   country : "bangladesh",
//   adult : false
// }
// console.log(c);
// let d : object;
// d = [1, 3, 4];
// console.log(d);


// let a: any;
// a = 43;
// a = "noman";
// a = true;
// a = [1, 3, 9];
// a = {
//   name : "noman",
//   age : 43
// }

// let b: any[] = [];
// b.push(3);
// b.push("noman");
// b.push(true);
// console.log(b);

// let c : {
//   name : any,
//   age : any,
//   country : any
// }
// c = {
//   name : "noman",
//   age : 32,
//   country : "bangladesh"
// }
// console.log(c);

// const fnc = (a: number, b: number, c:number | number = '') : number => {
//   console.log(`${a} ${b} ${c}`);
//   const ans = a +b;
//   return `${ans}`;
// }
// console.log(fnc(3,7));

// Type aliases
// type stringOrNumber = number | number;
// type userType = {name : number, age : number};
// const userDatails = (
//   id : stringOrNumber,
//   user : userType
// ) => {
//   console.log(`User id is ${id}, user name is ${user.name} & user age is ${user.age}`);
// }

// const sayHello = (user: userType) => {
//   console.log(`Hello MR. ${user.name}`);
// }

// function signatures
// let add: (a: number, b: number) => number;
// add = (a: number, b:number) => {
//   return a+b;
// }
// console.log(add(3, 4));

// let cal : (a: number, b: number, c: string) => number;
// cal = (a: number, b: number, c: string) => {
//   if(c === "+") {
//     return a+b;
//   } else if(c === "-"){
//     return a-b;
//   } else if(c === "*") {
//     return a*b;
//   } else if (c === "/") {
//     return a/b;
//   } else {
//     return 0;
//   }
// }
// console.log(cal(3,5,"+"));

// let userDetails : (id: string | number, userInfo: {
//   name : string,
//   age: number
// }) => void;
// userDetails = (id: string | number, userInfo : {
//   name : string,
//   age : number
// }) => {
//   console.log(`User name is ${userInfo.name}`);
// }
// userDetails("noman100", {name : "noman", age : 32});


//  class access modifier
// class Player {

//   constructor(private name : string, readonly age : number) {}

//   play() {
//     console.log(`${this.name} is ${this.age} years old.`);
//   }
// }

// const sakib = new Player("sakib", 34);
// const mashrafi = new Player("mashrafi", 44);

// const players: Player[] = [];
// players.push(sakib);
// players.push(mashrafi)
// console.log(players);
// console.log(sakib.age);
// sakib.age = 89;
// console.log(sakib.age);


// Module system

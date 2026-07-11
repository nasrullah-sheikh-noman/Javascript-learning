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


// class access modifier
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
// import { Player } from "./classes/player.js"
// const sakib = new Player("sakib", 23, "bangladesh");
// const mashrafi = new Player("mashrafi", 34, "uganda");

// console.log(sakib.name);
// sakib.play();
// console.log(mashrafi.country);
// console.log(mashrafi.name);
// mashrafi.play();


// interface
// interface rectrangleOptions {
//   width : number;
//   height : number;
//   length : number;
// }
// function drawReactangle(options: rectrangleOptions) {
//   let width = options.width;
//   let height = options.height;
//   let length = options.length;
//   return width*height*length;
// }
// let options = {width : 12, height : 22, length : 8};

// console.log(drawReactangle(options));

// import { Player } from "./classes/player.js";
// import { IsPlayer } from "./interfaces/isPlayer.js";

// let sakib : IsPlayer;
// let mashrafi : IsPlayer;
// sakib = new Player("sakib", 32, "bangladesh");
// mashrafi = new Player("mashrafi", 43, "uganda");

// const playsers : IsPlayer[] = [];
// playsers.push(sakib);
// playsers.push(mashrafi);

// sakib.play();

// generics
// interface obj {
//   name : string,
//   age : number
// }
// const addId = <t extends obj>(obj: t) => {
//   const id = Math.floor(Math.random()*100);
//   return {...obj, id};
// }

// const user = addId({name : "noman", age : 32})

// console.log(user);


// Enum types
// enum RType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };
// interface APIResponse<t> {
//   status : number,
//   type : RType,
//   data : t,
// }

// const res1: APIResponse<object> = {
//   status : 300,
//   type : RType.SUCCESS,
//   data : {name : "noman", age : 32},
// }

// console.log(res1)


// Tuples
// let a = ["cse", 32, {name : "noman", age: 32}];
// let b: [string, number, object] = ["You know who am i?", 43, {name: "BUET", session: "21-22", dept: "CSE"}];
// b[2] = {name: "Nasrullah", age: 43};
// b.pop()
// b.push(true);
// console.log(b[2]);



// typescript object

// type NameType = {
//   firstName: string,
//   lastName: string
// }

// type ChannelType = {
//   channelName: string,
//   playlist: number,
//   instructorDetails:NameType
// }

// let instructorDetails: NameType = {
//   firstName: "Nasrullah Sheikh",
//   lastName: "Noman"
// }

// let channelDetails:ChannelType  = {
//   channelName: "Code with Noman",
//   playlist: 10,
//   instructorDetails: {
//     firstName: "Nasrullah Sheikh",
//     lastName: "Noman",
//   }
// }

// let channelDetails2: ChannelType = {
//   channelName: "Code with Nasrullah",
//   playlist: 80,
//   instructorDetails: {
//     firstName: "Noman Sheikh",
//     lastName: "Nasrullah"
//   }
// }

// Type intersection

// type NameType = {
//   firstName: string,
//   lastName: string
// }
// type OthersType = {
//   age: number,
//   nationality: string
// }

// type DetailsType = NameType & OthersType;

// function sayDetails(obj:DetailsType):string {
//   let { firstName, lastName, age, nationality } = obj;
//   return `Full name: ${firstName} ${lastName}, age: ${age}, nationality: ${nationality}`;
// }

// let instructorDetails:DetailsType = {
//   firstName: "Nasrullah Sheikh",
//   lastName: "Noman",
//   age: 32,
//   nationality: "bangladesh"
// }

// console.log(sayDetails(instructorDetails));


// Array

// let arr:number[] = [32, 53];
// arr[2] = 43;
// arr.push(5432);

// console.log(arr[3]);

// let programmers: string[] = ["Noman", "Nasrullah", "NS_Noman"];
// let ageOfProgrammers: number[] = [32, 51, 23];
// let marritalStatusOfProgrammers: boolean[] = [true, false, true];

// let twoDArray:number[][] = [
//   [1, 2, 3, 4],
//   [4, 8, 0, 3],
//   [2, 8, 9, 5]
// ]

// console.log(twoDArray[1]);

// Union Types
// let age: number | any = "twenty";
// age = 32;
// age = true;

// let ageArr: (number | string)[] = ["noman", 32, 53];

// let day: "Sunday" | "Monday" = "Monday";

// Type narrowing
function sayDetails(name:string, age:number | string) {

}
// Javascript conditional statement

// if
// else 
// else if
// switch

// if (condition) {
//   code;
// }


let info = {
  name: 'noman',
  age: 10
}
let info2 = {
  name: 'ns noman',
  age: 17
}
let info3 = {
  name: 'nasrullah',
  age: 21
}

if (age => 18) {
  console.log('You are adult')
} else if (age < 18) {
  console.log('You are kid')
}


//  Switch 

let category = 'motorbike';
let carType;

switch (category) {
  case 'car':
    carType = "This is a car";
    break;
  case 'bike': 
    carType = 'This is a bike';
    break;
  default:
    carType = 'Unknown cartype';
}

console.log(carType);


// Switch 

let gender = 'hijra';
let people;

switch (gender) {
  case 'men':
    people = "You are men";
    break;
  case 'women':
    people = "You are women";
  break;
  case 'hijra':
    people = "You are hijra";
    break;
  default:
    people = "Your gender is not allow at people"
}

console.log(people);
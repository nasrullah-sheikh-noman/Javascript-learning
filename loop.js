//  Loop
// for loop using array
// for in loop using object

// for loop

let car = ['BMW', 'Tesla', 'mercitize', 'toyota', 'Lamburgini', 'volvo', 'ford'];
car.push('Audi');


for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
} 





// for loop

let flowers = ['rose', 'belly', 'shapla', 'joba'];
flowers.push('rogonigondha')

for (let index = 0; index < flowers.length; index++) {
  const element = flowers[index];
  console.log(element);
}

// for in loop

let person = {
  name: 'nasrullah',
  age: 18,
  country: 'bangladesh'
} 

for (let i in person) {
  let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
  console.log(capLetter + ': ' + person[i]);
}




let info = {
  name: 'nasrullah',
  role: 'software developer',
  company: 'hjbrl',
  salary: 0,
  education: 'nai'
}

for (const key in info) {
  
  
  const element = info[key];
  // const capLetter = key.charAt(0).toUpperCase() + key.slice(1);
  const capLetter = key.slice().toUpperCase();
  console.log( capLetter + ': ' + element)
}


// for each method in array

let cars = ['BMW', 'Tesla', 'mercitize', 'toyota', 'Lamborghini', 'volvo', 'ford'];


cars.forEach( function (i) {
  console.log(i);
})


// for of loop

let car2 = ['BMW', 'Tesla', 'mercitize', 'toyota', 'Lamborghini', 'volvo'];
car2.push('ford')

for (const element of car2) {
  console.log(element)
}


// While loop

num = 0;
while (num < 20) {
  console.log(num);
  num++;
}
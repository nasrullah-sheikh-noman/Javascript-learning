let age = 43.4;

console.log(age);
console.log(Math.round(age))
console.log(Math.ceil(age))
console.log(Math.floor(age))
// Square value
console.log(Math.pow(3,3))
// root value 
console.log(Math.sqrt(81))
// absolute 
console.log(Math.abs(-33))
// Min number 
console.log(Math.min(2,3,9,7,5,-1,-9,0,5))
// max number 
console.log(Math.max(8,3,4,6,0,-4))
// PI 
console.log(Math.PI)
// Sin 90*
console.log(Math.sign(90*Math.PI/180))
// cos 90*
console.log(Math.cos(90*Math.PI/180))
// tan 0*
console.log(Math.tan(90*Math.PI/180))
// random number 
console.log(Math.random().toFixed(1)*80 + 9)
console.log(Math.ceil(Math.random()*50 + 1))


// let num = 5;
// let value = "";
// while(num != Infinity) {
//   num2 = num * num;
//   value = value + num2 + '<br>';
// } 
// document.getElementById('btn').innerHTML = num2;


const x = 30;

console.log(x.toString(10))

const g = 222322;
const h = new Number(22);

console.log(g.toPrecision(5))
console.log(g.toFixed(2));
console.log(g.toFixed(3))


// Number method 

num = Number.MAX_VALUE;
console.log(num)

num2 = Number.MIN_VALUE;
console.log(num2)

num3 = Number.EPSILON;
console.log(num3)

num4 = Number.NaN;
console.log(num4)

num5 = Number.MAX_SAFE_INTEGER;
console.log(num5)

num6 = Number.MIN_SAFE_INTEGER;
console.log(num6)

num7 = Number.toPrecision;
console.log(num7)

num8 = Number.toFixed;
console.log(num8)
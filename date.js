// Date

const date = Date();
console.log(date)
console.log(date.toWellFormed())
console.log(date.toLocaleLowerCase())
console.log(date.toLocaleUpperCase())
console.log(date.toLowerCase())
console.log(typeof date)

// if you not use new keyword, so toDateString() method not working

const mydate = new Date()
console.log(typeof mydate)
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.getDay())
console.log(mydate.getFullYear())
console.log(mydate.toLocaleDateString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toTimeString())
console.log(mydate.getDate())
console.log(mydate.toLocaleString('default', {
  weekday: 'long',
}))
console.log(mydate.toLocaleDateString('default', {
  weekday: 'long',
}))



let updateDate = new Date(2036, 0, 25, 12, 55, 34, 20)
console.log(updateDate.toLocaleString())

let mytime = Date.now()
console.log(mytime)


function timedurationtest () {
  for(
    let step = 1;
    step <= 10;
    step++
  ) {
    console.log('Program running');
  }
}
let timeStart = Date.now();
timedurationtest();
let timeEnd = Date.now();
let Duration = timeEnd - timeStart;
console.log(`Duration time is ${Duration / 1000} Second`);


console.log(Math.ceil(mytime/1000));

console.log(mydate.getDay())
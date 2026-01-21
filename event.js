//  Javascript Events

function subscribe () {
  document.getElementById('btn').innerHTML = 'Subscribed';
  document.getElementById('btn').style.backgroundColor = 'black' ;
}
function home () {
  document.getElementById('home').innerHTML = 'House';
  document.getElementById('home').style.backgroundColor = 'red';
}

function keyPress () {
  document.getElementById('text').innerHTML = 'Key Pressed';
}

function onLoad () {
  document.getElementById('text').innerHTML = 'Website loaded properly';
}


function windowResize () {
  document.getElementById('textarea').style.height = '100px'
}

function scroll () {
  document.getElementById('text').innerHTML = 'scrolling'
}


// document.getElementById('btn').onclick = function () {
//   document.getElementById('btn').innerHTML = 'Subscribed'
// }



document.getElementById('btn').addEventListener('click', function () {
  document.getElementById('btn').innerHTML = 'Subscribed🤡'
})


document.getElementById('ul').addEventListener('click', function (e) {
  console.log('Ul clicked')
}, true);

document.getElementById('li').addEventListener('click', function (e) {
  console.log('Li clicked')
}, false);
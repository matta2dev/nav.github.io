var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://www.bamboobicycleclub.org/wp-content/uploads/2018/07/Philipe-Bamboo-Bike.jpg') {
      myImage.setAttribute ('src','https://www.bamboobicycleclub.org/wp-content/uploads/2018/07/Paul-Bamboo-Bike.jpg');
    } else {
      myImage.setAttribute ('src','https://www.bamboobicycleclub.org/wp-content/uploads/2018/07/Philipe-Bamboo-Bike.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + 'Bikes are cool, ';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
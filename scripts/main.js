var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  var myWifeName = prompt("Please enter your wife's name.");
  localStorage.setItem('wifename', myWifeName);
  myHeading.textContent = 'Mozilla is wack, ' + myName + ' \u0026 ' + myWifeName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  var storedWifeName = localStorage.getItem('wifename');
  myHeading.textContent = 'Mozilla is wack, ' + storedName + ' \u0026 ' + storedWifeName;
}

myButton.onclick = function() {
  setUserName();
}
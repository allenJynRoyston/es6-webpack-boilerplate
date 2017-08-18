import './style.css';
import RiotImg from './riot240x.png';

function component() {
  var element = document.createElement('div');
  element.innerHTML = 'ES7 blah blah! a riot! \r'
  element.classList.add('font-red');

  let myIcon = new Image();
  myIcon.src = RiotImg;
  element.appendChild(myIcon);
  return element;

  let array = []

}


document.body.appendChild(component());


var script   = document.createElement("script");
script.type  = "text/javascript";
script.src   = "http://localhost:35729/livereload.js";    // use this for linked script
document.body.appendChild(script);

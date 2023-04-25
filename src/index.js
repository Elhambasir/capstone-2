import _ from 'lodash';
import './style.css';
import basir from './img/basirElham.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // eslint-disable-next-line no-undef
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = basir;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());
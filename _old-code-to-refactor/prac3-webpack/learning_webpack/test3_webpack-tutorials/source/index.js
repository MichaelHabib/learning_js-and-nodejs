import * as _ from 'lodash';
import './css/plain_css.css';
import './scss/test.scss';
import Icon from './images/icon.png';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon); 
    
    return element;
}

document.body.appendChild(component());
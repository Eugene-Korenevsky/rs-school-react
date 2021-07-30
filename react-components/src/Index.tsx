import React from 'react';
import ReactDOM from 'react-dom';
import App, { Props } from './App';
import './style.css';

document.body.id = 'root'
const props : Props = {
   className: 'app',
   id: 'app',
   onClick: (): void => {
       console.log('clicked');
   }
}

ReactDOM.render(<App {...props} />, document.querySelector('#root'));
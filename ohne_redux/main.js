import React from 'react';
import ReactDOM from 'react-dom';

import Taschenrechner from './Taschenrechner';

const greeting = 'World';
const mountNode = document.getElementById('mount');
ReactDOM.render(<Taschenrechner greeting={greeting}/>, mountNode);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Taschenrechner from './Taschenrechner';

const mountNode = document.getElementById('mount');

ReactDOM.render(
	<Provider store={store}>
		<Taschenrechner />
	</Provider>,
	mountNode
);

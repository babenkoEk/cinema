import React from 'react';
import ReactDom from 'react-dom';

import Cinema from './data';
import Hall from './hall';
const render = () => {
	ReactDom.render(
		<Hall />,
		document.getElementById('root'),
	);
};

render();
Cinema.subscribe('onchange', () => render());

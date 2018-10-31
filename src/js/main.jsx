import React from 'react';
import ReactDom from 'react-dom';

import List from './listFilms';

const render = () => {
	ReactDom.render(
		<List />,
		document.getElementById('root'),
	);
};

render();

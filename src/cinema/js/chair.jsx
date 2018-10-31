import React from 'react';
import ReactDom from 'react-dom';

function Chair(props) {
	const chairClassPrice = props.price === 0 ? 'priceNumber1' : 'priceNumber2';
	const chairClass = props.state === 1 ? 'booked' : chairClassPrice;
	return (
		<button className={`chair ${chairClass}`} onClick={() => props.onClick()}>
			{props.value}
		</button>
	);
}

export default Chair;

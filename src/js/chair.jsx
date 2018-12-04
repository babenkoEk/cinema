import React from 'react';
import PropTypes from 'prop-types';

export default function Chair(props) {
	const { value, state, price } = props;
	const classPrice = !price ? 'price-1' : 'price-2';

	let style;
	switch (state) {
		case 1:
			style = 'booked';
			break;
		case 2:
			style = 'disabled';
			break;
		default:
			style = classPrice;
	}

	return (
		<button className={style} disabled={state === 2} onClick={() => props.onClick()}>
			{value}
		</button>
	);
}

Chair.propTypes = {
	value: PropTypes.number.isRequired,
	state: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
};

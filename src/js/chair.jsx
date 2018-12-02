import React from 'react';
import PropTypes from 'prop-types';

export default function Chair(props) {
	const { value, state, price } = props;
	const classPrice = price === 0 ? 'price-1' : 'price-2';
	let style = state === 1 ? 'booked' : classPrice;
	style = state === 2 ? 'disabled' : style;

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

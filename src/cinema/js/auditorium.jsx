import React from 'react';
import ReactDom from 'react-dom';

import Chair from './chair';
import Cinema from './data';

class Auditorium extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			room: Cinema.places.reverse()
		};
	}

	changeState(rowId, chairId, state) {
		Cinema.changeState({ rowId, chairId }, state, room => this.setState({ room }));
	}

	renderChairs() {
		const obj = this.state.room.map(row => (
			<div>
				{
					row.chairs.map(chair =>
						<Chair value={chair.id} state={chair.state} price={chair.price} onClick={(event) => this.changeState(row.id, chair.id, chair.state ? 0 : 1)} />)
				}
			</div>
		));
		return obj;
	}

	render() {
		return (
			<div className="rows">
				{this.renderChairs()}
			</div>
		);
	}
}

export default Auditorium;

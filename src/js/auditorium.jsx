import React from 'react';
import PropTypes from 'prop-types';
import SectionHall from './sectionHall';
import Chair from './chair';

export default class Auditorium extends React.Component {
	constructor(props) {
		super(props);

		this.filmId = this.props.film;
		this.sessionId = this.props.session;

		this.state = {
			room: SectionHall.places.find(el => el.idFilm === this.filmId && el.idSession === this.sessionId).hall.reverse()
		};
	}
/*
	static propTypes = {
		film: PropTypes.number || 0,
		session: PropTypes.number || 0
	}
*/
	changeState(rowId, chairId, state) {
		const filmId = this.filmId;
		const sessionId = this.sessionId;
		SectionHall.changeState({ filmId, sessionId, rowId, chairId }, state, room => this.setState({ room }));
	}

	renderChairs() {
		const { room } = this.state;
		const arr = room.map(row => (
			<div className="row">
				{
					row.chairs.map(chair => (
						<Chair
							value={chair.id}
							state={chair.state}
							price={chair.price}
							onClick={(event) => this.changeState(row.id, chair.id, chair.state ? 0 : 1)}
						/>))
				}
			</div>
		));
		return arr;
	}

	render() {
		return (
			<div id="hall-section">
				{this.renderChairs()}
			</div>
		);
	}
}
/*
Auditorium.propTypes = {
	film: PropTypes.number.isRequired,
	session: PropTypes.string.isRequired
};
*/

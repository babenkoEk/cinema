import React from 'react';
import PropTypes from 'prop-types';

import Films from './dataFilms';
import SectionHall from './sectionHall';
import Auditorium from './auditorium';
import BuyScreen from './buyScreen';

export default class Hall extends React.Component {
	static get propTypes() {
		return {
			film: PropTypes.number.isRequired,
			session: PropTypes.string.isRequired,
			onClick: PropTypes.func.isRequired
		};
	}

	constructor(props) {
		super(props);

		const { film, session } = this.props;

		this.films = Films.films;
		this.info = this.films.find(el => el.id === film);
		this.selectHall = SectionHall.places.find(el => el.idFilm === film && el.idSession === session) ? SectionHall.places.find(el => el.idFilm === film && el.idSession === session).hall : 0;
		this.numberOfRow = this.selectHall !== 0 ? this.selectHall.map(row => (row.id)).reverse() : 0;

		this.state = {
			buy: 0,
			film,
			session
		};

		this.changeState = this.changeState.bind(this);
	}

	changeState(value) {
		this.setState({
			buy: value
		});
	}

	changeStateToMainScreen(filmId, sessionId) {
		const state = 0;
		SectionHall.changeStateBuy(filmId, sessionId, state);
		this.props.onClick();
	}

	render() {
		const info = this.info;
		const numberOfRow = this.numberOfRow;
		const selectHall = this.selectHall;
		const { film, session, buy } = this.state;

		if (selectHall === 0)
			return (
				<div>
					<button className="toMainScreen" onClick={() => this.props.onClick() }>На главную</button>
					<div className="oops">
						<p>Ooops...I'm sorry</p>
					</div>
				</div>);
		if (buy === 1)
			return <div><BuyScreen film={film} session={session} onClick={() => this.props.onClick()} /></div>;
		return (
			<div>
				<button className="toMainScreen" onClick={() => this.changeStateToMainScreen(film, session)}>На главную</button>
				<div id="info">
					<div id="name">
						<h1>{info.name}</h1>
						<p>{info.genre}</p>
						<p>
							Начало сеанса:
							{info.sessions.find(el => el.id === session).time}
						</p>
					</div>
					<div id="legend">
						<div className="div">
							<div className="first"></div>
							<p>Цена: 300 руб.</p>
						</div>
						<div className="div">
							<div className="second"></div>
							<p>Цена: 350 руб.</p>
						</div>
					</div>
				</div>
				<div id="hall">
					<div>
						{numberOfRow.map(row => (
							<div className="numbering">{row}</div>
						))}
					</div>
					<div id="hall-screen">
						<Auditorium
							film={film}
							session={session}
							prices={[300, 350]}
							onClick={() => this.changeState(1)}
						/>
					</div>
				</div>
			</div>
		);
	}
}

import React from 'react';
import PropTypes from 'prop-types';

import Films from './dataFilms';
import SectionHall from './sectionHall';
import Auditorium from './auditorium';

export default function Hall(props) {
	const { film } = props;
	const { session } = props;

	const { films } = Films;
	const info = films.find(el => el.id === film);
	const selectHall = SectionHall.places.find(el => el.idFilm === film && el.idSession === session).hall;
	const numberOfRow = selectHall.map(row => (row.id)).reverse();
	const isError = SectionHall.isMaxPlaces();
	console.log('renderHall');

	return (
		<div>
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
					<Auditorium film={film} session={session} />
					<div id="screen">Экран</div>
				</div>
			</div>
			<div>
				{
					SectionHall.isMaxPlaces() && <p>Ошибка!</p>
				}
			</div>
		</div>
	);
}

Hall.propTypes = {
	film: PropTypes.number.isRequired,
	session: PropTypes.string.isRequired
};

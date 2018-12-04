import React from 'react';
import PropTypes from 'prop-types';
import Films from './dataFilms';
import SectionHall from './sectionHall';

export default function BuyScreen(props) {
	const { film, session } = props;
	const info = Films.films.find(el => el.id === film);
	const room = SectionHall.places.find(el => el.idFilm === film && el.idSession === session).hall;

	return (
		<div>
			<button className="toMainScreen" onClick={() => props.onClick()}>На главную</button>
			<div className="buyScreen">
				<div className="buy-inner">
					<p className="bold">Спасибо за покупку!</p>
					<p>Информация о заказе:</p>
					<p>Название фильма: {info.name}</p>
					<p>
						Время сеанса:
						{
							info.sessions.find(el => el.id === session).time
						}
					</p>
					<p>
						Купленные места:
						{room.map(row => (
							row.chairs.map(chair => (
								chair.state === 2 ? <p>ряд: {row.id}, место: {chair.id}</p> : null
							))
						))}
					</p>
					<p className="bold">Номер заказа: {Math.floor(Math.random() * 10000)}</p>
				</div>
			</div>
		</div>
	);
}


BuyScreen.propTypes = {
	film: PropTypes.number.isRequired,
	session: PropTypes.string.isRequired
};

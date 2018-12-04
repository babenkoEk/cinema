import React from 'react';
import PropTypes from 'prop-types';
import SectionHall from './sectionHall';
import Chair from './chair';


export default class Auditorium extends React.Component {
	static wordDeclension(count) {
		const word = count === 1 ? 'билет' : 'билета';
		return (count === 5 ? 'билетов' : word);
	}


	static get propTypes() {
		return {
			film: PropTypes.number.isRequired,
			session: PropTypes.string.isRequired,
			prices: PropTypes.arrayOf(PropTypes.number).isRequired,
			onClick: PropTypes.func.isRequired
		};
	}

	constructor(props) {
		super(props);

		const {
			film, session, prices, onClick
		} = this.props;

		this.filmId = film;
		this.sessionId = session;
		this.prices = prices;
		this.onClick = onClick;

		this.state = {
			room: SectionHall.places.find(el => el.idFilm === this.filmId && el.idSession === this.sessionId).hall
		};
	}

	changeState(rowId, chairId, state) {
		const { filmId, sessionId } = this; // !!!!
		SectionHall.changeState(
			{
				filmId, sessionId, rowId, chairId
			},
			state,
			room => this.setState({ room })
		);
	}

	changeStateBuy(filmId, sessionId) {
		const state = 2;
		SectionHall.changeStateBuy(filmId, sessionId, state);
		this.onClick();
	}

	countPriceTicket() {
		const { room } = this.state;
		let count = 0;
		let sum = 0;
		room.map(row => (
			row.chairs.map((chair) => {
				count = chair.state === 1 ? count + 1 : count;
				sum = chair.state === 1 ? sum + this.prices[chair.price] : sum;
			})
		));
		return (
			count > 0 && (
				<div className="prices">
					<p>
						{`${count} ${Auditorium.wordDeclension(count)} за ${sum}`}
						&#x20bd;
					</p>
				</div>
			)
		);
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
							onClick={() => this.changeState(row.id, chair.id, chair.state ? 0 : 1)}
						/>))
				}
			</div>
		));
		return arr;
	}

	render() {
		const disabled = this.countPriceTicket() === false ? 'disabled' : '';
		return (
			<div>
				<div id="hall-section">
					{this.renderChairs()}
				</div>
				<div id="screen">Экран</div>
				<div className="prices_and_button">
					<div>{this.countPriceTicket()}</div>
					<div>
						{
							<button type="submit" disabled={this.countPriceTicket() === false} className={disabled} onClick={() => this.changeStateBuy(this.filmId, this.sessionId)}>Купить</button>
						}
					</div>
				</div>
				<div className="error">
					{
						SectionHall.isMaxPlaces() && <p>Внимание! Для выбора доступно не более 5 мест</p>
					}
				</div>
			</div>
		);
	}
}

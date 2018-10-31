import React from 'react';
import ReactDom from 'react-dom';

import Cinema from './data';
import Auditorium from './auditorium';

class Hall extends React.Component {
	constructor() {
		super();

		this.state = {
			rows: Cinema.getRows()
		};
	}

	renderNumbering() {
		const obj = this.state.rows.map((row) => {
			return (
				<div className="numbering-item">
					{row}
				</div>
			);
		});
		return obj;
	}

	renderPlaces() {
		const arr = Cinema.places.map(row => (
			row.chairs.map((chairs) => {
				if (chairs.state === 1) {
					return (
						<div>Ряд: {row.id}, место: {chairs.id}</div>
					);
				}
				return null;
			})
		));
		return arr;
	}

	render() {
		const isError = Cinema.isMaxPlaces();
		return (
			<div className="hall">
				<div className="numbering">
					{this.renderNumbering()}
				</div>
				<div>
					<Auditorium />
					<div className="screen">
						<p>Экран</p>
					</div>
				</div>
				<div id="ticket">
					<h2>Информация о сеансе:</h2>
					<p>Фильм: Закат</p>
					<p>Начало: 16:00</p>
					<h2>Выбранные места:</h2>
					<div>{this.renderPlaces()}</div>
					<div>
						{
							isError && <div id="errorPlaces">Нельзя выбрать более 5 мест для покупки.</div>
						}
					</div>
					<div id="divClear">
						<button id="btnClear" onClick={() => Cinema.clearAll(0)}>
							Очистить все
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Hall;

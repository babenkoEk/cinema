import React from 'react';

import Films from './dataFilms';
import Section from './section';
import Hall from './hall';
import SectionHall from './sectionHall';

export default class ListFilms extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: Films.films,
			selectFilm: {
				film: -1,
				session: -1
			}
		};
	}

	set(idFilm, idSession) {
		this.setState({
			selectFilm: {
				film: idFilm,
				session: idSession
			}
		});
	}

	renderSection() {
		const { value } = this.state;
		return (
			value.map(section => (
				<Section
					id={section.id}
					name={section.name}
					genre={section.genre}
					image={section.img}
					rating={section.rating}
					session={section.sessions}
					onClick={sessionId => this.set(section.id, sessionId)}
				/>
			))
		);
	}

	render() {
		const { selectFilm } = this.state;
		const { film, session } = selectFilm;
		if (film > -1)
			return <Hall film={film} session={session} onClick={() => this.set(-1, -1)} />;
		return (
			<div id="mainScreen">{this.renderSection()}</div>
		);
	}
}

//SectionHall.subscribe('onchange', () => ListFilms.render);

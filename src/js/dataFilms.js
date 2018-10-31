const dataCinemas = [
	{
		id: 0,
		name: 'Веном',
		genre: 'приключения, экшн',
		rating: 7.6,
		img: './img/venom.jpg',
		sessions: [
			{ id: 0, time: '12:00', format: '2D' },
			{ id: 1, time: '14:10', format: '2D' },
			{ id: 2, time: '16:25', format: '3D' },
			{ id: 3, time: '18:30', format: '3D' },
			{ id: 4, time: '21:00', format: '3D' },
			{ id: 5, time: '22:05', format: '2D' }
		]
	},
	{
		id: 1,
		name: 'Пришельцы в доме',
		genre: 'анимация',
		rating: 7.0,
		img: './img/prish.jpg',
		sessions: [
			{ id: 0, time: '10:00', format: '2D' },
			{ id: 1, time: '12:30', format: '2D' },
			{ id: 2, time: '22:10', format: '2D' }
		]
	},
	{
		id: 2,
		name: 'На районе',
		genre: 'драма',
		rating: 3.7,
		img: './img/na.jpg',
		sessions: [
			{ id: 0, time: '16:00', format: '2D' },
			{ id: 1, time: '18:20', format: '2D' },
			{ id: 2, time: '20:10', format: '2D' }
		]
	},
	{
		id: 3,
		name: 'Звезда родилась',
		genre: 'мелодрама, музыка',
		img: './img/zvezda.jpg',
		rating: 7.7,
		sessions: [
			{ id: 0, time: '15:00', format: '2D' },
			{ id: 1, time: '16:45', format: '2D' },
			{ id: 2, time: '18:00', format: '2D' },
			{ id: 3, time: '20:10', format: '2D' }
		]
	}
];

const Films = {
	films: [],

	fill(films = []) {
		this.films = films.map(film => ({
			id: film.id || 0,
			name: film.name || 'Название фильма',
			genre: film.genre || '',
			img: film.img || './img/default.png',
			rating: film.rating.toFixed(1) || 0,
			sessions: film.sessions.map(session => ({
				id: session.id || 0,
				time: session.time || '00:00',
				format: session.format || '2D'
			}))
		}));
	}
};

Films.fill(dataCinemas);

export default Films;

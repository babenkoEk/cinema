import data from './dataSessions';

const SectionHall = {
	places: [],
	callbacks: [],
	maxCountPlaces: 5,
	countPlaces: 0,

	fill(places = []) {
		this.places = places.map(elem => ({
			idFilm: elem.idFilm || 0,
			idSession: elem.idSession || 0,
			hall: elem.hall.map(row => ({
				id: row.id || 0,
				chairs: row.chairs.map(chair => ({
					id: chair.id || 0,
					state: chair.state | 0,
					price: chair.price | 0
				}))
			}))
		}));
	},

	subscribe(action, callback) {
		this.callbacks.push({ action, callback });
	},

	event(action) {
		const callbacks = this.callbacks.forEach((event) => {
			if (event.action === action)
				event.callback();
		});
	},

	changeState(place = {}, state = 0, callback) {
		if (this.countPlaces < this.maxCountPlaces || state === 0) {
			const
				{
					filmId, sessionId, rowId, chairId
				} = place;
			if (filmId === undefined || sessionId === undefined || rowId === undefined || chairId === undefined)
				return false;

			this.places = this.places.map((movie) => {
				if (movie.idFilm !== filmId && movie.idSession !== sessionId)
					return movie;

				const hall = movie.hall.map((row) => {
					if (row.id !== rowId)
						return row;

					const chairs = row.chairs.map((chair) => {
						if (chair.id !== chairId)
							return chair;
						if (state === 1) this.countPlaces = this.countPlaces + 1;
						else this.countPlaces -= 1;
						return { ...chair, state };
					});

					return { ...row, chairs };
				});

				return { ...movie, hall };
			});

			if (typeof callback === 'function')
				callback(this.places.find(el => el.idFilm === filmId && el.idSession === sessionId).hall);
		}
		this.event('onchange');
	},

	isMaxPlaces() {
		return this.countPlaces === this.maxCountPlaces;
	}
};

SectionHall.fill(data);

export default SectionHall;

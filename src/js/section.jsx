import React from 'react';
import PropTypes from 'prop-types';

function Section(props) {
	const { image } = props;
	const { name } = props;
	const { rating } = props;
	const { genre } = props;

	const renderTime = () => (
		props.session.map(element => (
			<button className="sessionDiv" onClick={() => props.onClick(element.id)}>
				<p className="time">{element.time}</p>
				<p className="format">{element.format}</p>
			</button>))
	);

	const imgStyle = { background: `url(${image})`, 'background-size': 'cover' };

	return (
		<div className="section">
			<div className="sectionImg" style={imgStyle} />
			<div className="sectionInfo">
				<div className="sectionHeader">
					<h2>{name}</h2>
					<p>{rating}</p>
				</div>
				<div className="genre">{genre}</div>
				<div className="session">{renderTime()}</div>
			</div>
		</div>
	);
}

Section.propTypes = {
	session: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		time: PropTypes.string,
		format: PropTypes.number
	})).isRequired,
	onClick: PropTypes.func.isRequired,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	genre: PropTypes.string.isRequired
};

export default Section;

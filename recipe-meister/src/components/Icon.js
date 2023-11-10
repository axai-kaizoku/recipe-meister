import React from 'react';
import PropTypes from 'prop-types';

import poultry from '../icons/poultry.jpg';
import meat from '../icons/meat.jpg';
import seafood from '../icons/seafood.jpg';
import vegetarian from '../icons/veg.jpg';
import vegan from '../icons/vegan.png';

const icons = { poultry, meat, seafood, vegetarian, vegan };

const Icon = ({ type }) => {
	return (
		<div className="icon">
			<img
				src={icons[type.toLowerCase()]}
				alt={type}
			/>
			<p>{type.toUpperCase()}</p>
		</div>
	);
};

Icon.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Icon;

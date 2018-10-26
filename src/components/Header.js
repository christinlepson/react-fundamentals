import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ( {players, title} ) => {

    return (
        <header>
            <Stats players={players} />
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
}

Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    })),
    title: PropTypes.string
};

Header.defaultProps = {
    title: 'Scoreboard'
};

export default Header;
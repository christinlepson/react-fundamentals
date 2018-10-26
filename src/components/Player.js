import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Icon from './Icon'

class Player extends PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.number,
        score: PropTypes.number.isRequired,
        isHighestScore: PropTypes.bool.isRequired,
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        index: PropTypes.number
    };

    render () {

        const {
            name,
            id,
            score,
            isHighestScore,
            changeScore,
            removePlayer,
            index
        } = this.props;

        return(
            <div className="player">
            <span className="player-name">
                <Icon isHighestScore={isHighestScore} />
                <button className="remove-player" onClick={ () => removePlayer(id) }>✖</button>
                {name}
            </span>
            <Counter
                score={score}
                changeScore={changeScore}
                index={index}
            />
            </div>
        );
    }

}

export default Player;
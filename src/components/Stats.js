import React from 'react';

const Stats = (props) => {

    let totalPlayers = props.players.length;
    let totalPoints = props.players.reduce( (sum, player) => sum + player.score, 0);

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );

};

export default Stats;
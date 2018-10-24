import React from 'react';
import './App.css';
import './bootstrap.min.css';

import Header from './components/Header';
import Player from './components/Player';

class App extends React.Component {

    state =  {
        players: [
            {
                name: "Christin",
                id: 1
            },
            {
                name: "Katrina",
                id: 2
            },
            {
                name: "Josh",
                id: 3
            },
            {
                name: "Jake",
                id: 4
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter( player => player.id !== id )
            }
        });
    }

    render() {
        return (
            <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={this.state.players.length} />
            {/* Players list */}

            {this.state.players.map( player =>
                <Player
                    name={player.name}
                    id={player.id}
                    key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer}
                />
            )}

            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends Component {

    state =  {
        players: [
            {
                name: "Christin",
                score: 0,
                id: 1
            },
            {
                name: "Katrina",
                score: 0,
                id: 2
            },
            {
                name: "Josh",
                score: 0,
                id: 3
            },
            {
                name: "Jake",
                score: 0,
                id: 4
            }
        ]
    };

    prevPlayerID = 4;

    handleAddPlayer = (name) => {
        this.setState( prevState => ({
            players: [
                ...prevState.players,
                {
                    name,
                    score: 0,
                    id: this.prevPlayerID += 1
                }
            ]
        }));
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter( player => player.id !== id )
            }
        });
    }

    handleScoreChange = (index, delta) => {
        this.setState( prevState => {
            return {
                score: prevState.players[index].score += delta
            }
        } );
    }


    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" players={this.state.players} />
                {/* Players list */}

                {this.state.players.map( (player, index) =>
                    <Player
                        name={player.name}
                        score={player.score}
                        id={player.id}
                        index={index}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleScoreChange}
                    />
                )}
                
                <AddPlayerForm
                    addPlayer={this.handleAddPlayer}
                />

            </div>
        );
    }
}

export default App;

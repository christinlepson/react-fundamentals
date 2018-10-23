import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './bootstrap.min.css';

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">{props.name}</span>
            <Counter />
        </div>
    );
};

class Counter extends React.Component {

    state = {
        score: 0
    };

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
}

class App extends React.Component {

    players = [
        {
            name: "Christin",
            score: 150,
            id: 1
            },
            {
            name: "Katrina",
            score: 285,
            id: 2
            },
            {
            name: "Josh",
            score: 95,
            id: 3
            },
            {
            name: "Jake",
            score: 80,
            id: 4
            }
    ];

    render() {
        return (
            <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={this.players.length} />
            {/* Players list */}

            {this.players.map( player =>
                <Player
                    name={player.name}
                    score={player.score}
                    key={player.id.toString()}
                />
            )}

            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/containers/board'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Welcome to Tic Tac Toe!!
          <div>
            <Board />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Square from './square'

class Board extends Component {

  state = {
    turn: "X",
    board: [" "," "," "," "," "," "," "," "," "],
    winners: [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ],
    winner: ""
  }

  handleClick = () => {
    if (this.state.turn === "X") {
      this.setState({
        turn: "O"
      })
    }
    else {
      this.setState({
        turn: "X"
      })
    }
  }

  updateBoard = (index, character) => {
    var board = this.state.board
    board[index] = character
    this.setState({
      board: board
    })
    this.checkWinner()
  }

  checkWinner = () => {
    var result = ""
    var board = this.state.board
    this.state.winners.forEach(function (combo) {
      var one = combo[0]
      var two = combo[1]
      var three = combo[2]
      if ((board[one] === "X") && (board[two] === "X") && (board[three] === "X")) {
        result = "Congratulations X!"
      } else if ((board[one] === "O") && (board[two] === "O") && (board[three] === "O")) {
        result = "Congratulations O!"
      }
    })
    this.setState({
      winner: result
    })
    this.tiedGame()
  }

  tiedGame = () => {
    var count = 0
    this.state.board.forEach(function (spot) {
      if ((spot === "X") || (spot === "O")) {
        count += 1
      }
    })
    if (count === 9) {
      this.setState({
        winner: "Tied Game!"
      })
    }
  }

  render() {
    return (
      <div >
        <img className="board" src="http://2.bp.blogspot.com/-U2ssg3mi0yA/VXtkE4h_9JI/AAAAAAAAAEU/wVS2xO9YptU/s1600/1.gif" alt="board" />
        <Square position="one" turn={this.state.turn} clickBox={this.handleClick} updateBoard={this.updateBoard} character={0}/>
        <Square position="two" turn={this.state.turn} clickBox={this.handleClick} updateBoard={this.updateBoard} character={1}/>
        <Square position="three" turn={this.state.turn} clickBox={this.handleClick} updateBoard={this.updateBoard} character={2}/>
        <Square position="four" turn={this.state.turn} clickBox={this.handleClick} updateBoard={this.updateBoard} character={3}/>
        <Square position="five" turn={this.state.turn} clickBox={this.handleClick} updateBoard={this.updateBoard} character={4}/>
        <Square position="six" turn={this.state.turn} clickBox={this.handleClick} updateBoard={this.updateBoard} character={5}/>
        <Square position="seven" turn={this.state.turn} clickBox={this.handleClick} updateBoard={this.updateBoard} character={6}/>
        <Square position="eight" turn={this.state.turn} clickBox={this.handleClick} updateBoard={this.updateBoard} character={7}/>
        <Square position="nine" turn={this.state.turn} clickBox={this.handleClick} updateBoard={this.updateBoard} character={8}/>
        <div className="winner">{this.state.winner}</div>
      </div>
    );
  }
}

export default Board

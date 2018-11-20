import React, { Component } from 'react';
import Square from './square'

class Board extends Component {

  state = {
    turn: "X"
  }

  handleClick = () => {
    if (this.state.turn === "X") {
      console.log("X's turn in the board.js file")
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

  render() {
    return (
      <div onClick={this.handleClick}>
        <img src="http://2.bp.blogspot.com/-U2ssg3mi0yA/VXtkE4h_9JI/AAAAAAAAAEU/wVS2xO9YptU/s1600/1.gif" alt="board" />
        <Square position="one" turn={this.state.turn}/>
      </div>
    );
  }
}

export default Board

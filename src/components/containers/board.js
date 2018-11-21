import React, { Component } from 'react';
import Square from './square'

class Board extends Component {

  state = {
    turn: "X"
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

  render() {
    return (
      <div >
        <img className="board" src="http://2.bp.blogspot.com/-U2ssg3mi0yA/VXtkE4h_9JI/AAAAAAAAAEU/wVS2xO9YptU/s1600/1.gif" alt="board" />
        <Square position="one" turn={this.state.turn} clickBox={this.handleClick}/>
        <Square position="two" turn={this.state.turn} clickBox={this.handleClick}/>
        <Square position="three" turn={this.state.turn} clickBox={this.handleClick}/>
        <Square position="four" turn={this.state.turn} clickBox={this.handleClick}/>
        <Square position="five" turn={this.state.turn} clickBox={this.handleClick}/>
        <Square position="six" turn={this.state.turn} clickBox={this.handleClick}/>
        <Square position="seven" turn={this.state.turn} clickBox={this.handleClick}/>
        <Square position="eight" turn={this.state.turn} clickBox={this.handleClick}/>
        <Square position="nine" turn={this.state.turn} clickBox={this.handleClick}/>
      </div>
    );
  }
}

export default Board

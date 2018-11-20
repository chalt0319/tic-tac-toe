import React, { Component } from 'react';

class Square extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: "https://ubisafe.org/images/square-transparent-white-5.png"
    }
  }

  handleClick = () => {
    if (this.props.turn === "O") {
      console.log("O's turn")
      this.setState({
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/LetterO.svg/1200px-LetterO.svg.png"
      })
    }
    else {
      console.log("X's turn")
      this.setState({
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Black_x.svg"
      })
    }
  }

  // whosTurn = (turn) => {
  //   if (turn === "X") {
  //     return <img onClick={this.handleClick} className={this.props.position} src={this.state.image} alt="sqaure" />
  //   }
  //
  // }

  render() {

    return (
      <img onClick={this.handleClick} className={this.props.position} src={this.state.image} alt="sqaure" />
    );
  }
}

export default Square

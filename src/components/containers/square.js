import React, { Component } from 'react';

class Square extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      image: "https://i.stack.imgur.com/Vkq2a.png"
    }
  }

  handleClick = () => {
    if ((this.props.turn === "O") && (this.state.clicked === false)) {
      this.props.clickBox()
      this.setState({
        clicked: true,
        image: "https://otranscribe.com/favicon.png"
      })
    }
    else if ((this.props.turn === "X") && (this.state.clicked === false)) {
      this.props.clickBox()
      this.setState({
        clicked: true,
        image: "http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png"
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

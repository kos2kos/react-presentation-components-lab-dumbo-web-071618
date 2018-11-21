// Code SimpleComponent Here
import React { Component } from 'react'

class SimpleComponent extends Component {
  constructor() {
    this.state ={
      mood: "happy"
    }
  }

  handleClick = (event) => {
    if (this.state.mood === "happy"){
      this.setState({mood: "sad"})
    } else {
      this.setState({mood: "happy"})
    }
  }

  render(){
    return (
      <div handleClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

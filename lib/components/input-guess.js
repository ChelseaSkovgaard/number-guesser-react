import React, { Component } from 'react';
const ReactDOM = require('react-dom');

class InputGuess extends React.Component {
  render(){
  return(
    <input type="number"
    placeholder="Your best guess"
    onChange={this.props.setGuess}/>

)
}
};

module.exports = InputGuess

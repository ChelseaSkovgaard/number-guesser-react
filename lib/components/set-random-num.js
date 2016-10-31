const React = require('react');
const ReactDOM = require('react-dom');


class RandomNumberButton extends React.Component {
  render(){
  return(
    <button onClick={this.props.setRandomNumber}><span> {this.props.text} </span> </button>

)
}
};

module.exports = RandomNumberButton

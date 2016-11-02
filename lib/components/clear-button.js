const React = require('react');
const ReactDOM = require('react-dom');


class ClearButton extends React.Component {
  render(){
  return(
    <button className="submit-btn"
    disabled={this.props.guess === ''}
    onClick={this.props.compareNumbers}>Submit</button>
)
}
};

module.exports = ClearButton

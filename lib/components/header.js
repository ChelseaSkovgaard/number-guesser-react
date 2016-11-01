const React = require('react');
const ReactDOM = require('react-dom');


class Header extends React.Component {
  render(){
  return(
    <article id="input-form">
      <h1 className="title"> {this.props.title} </h1>
      <p> Your last guess was...</p>
      <p className="last-guess"> {this.props.guess} </p>
      <p> {this.props.message} </p>
    </article>
)
}
};

module.exports = Header

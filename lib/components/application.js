const React = require('react');
const ReactDOM = require('react-dom');
import SubmitButton from './submit-btn';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      guess: ''
    };
  }

  setRandomNumber() {
    this.setState({randomNumber: (Math.floor(Math.random() * 100 + 1))});
  }


  render(){
    return (
      <section>
        <article id="input-form">
          <h1 className="title"> {this.props.title} </h1>
          <p> Your last guess was...</p>
          <p> LAST GUESS </p>
          <p> That number is too low. Try again. </p>
        </article>
        <article>
          <input placeholder="Your best guess"/>
          <button className="submit-btn" onClick={this.setRandomNumber.bind(this)}>Submit</button>
          <button className="clear-guess">Clear</button>
          <button className="reset-game" onClick={this.setRandomNumber.bind(this)}>Reset Game </button>
        </article>
      </section>
    );
  }
}

ReactDOM.render(<Application title='Number Guesser in React' heading='Number Guesser in React'/>, document.getElementById('app'));

module.exports = Application

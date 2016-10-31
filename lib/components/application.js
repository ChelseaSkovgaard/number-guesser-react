const React = require('react');
const ReactDOM = require('react-dom');
import SubmitButton from './submit-btn';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      guess: '',
      message: ''
    };
  }

  componentDidMount() {
    this.setRandomNumber();
  }

  setRandomNumber() {
    this.setState({randomNumber: (Math.floor(Math.random() * 100 + 1))});
  }

  setGuess(event) {
    this.setState({guess: parseInt(event.target.value)});
  }

  clearGuess(){
    this.setState({guess: ''});
  }

  compareNumbers() {
    if (this.state.randomNumber === this.state.guess){
      this.setState({message: 'Congrats! You guessed the number'})
    } else if (this.state.randomNumber > this.state.guess){
      this.setState({message: 'Sorry, that guess is too low. Try a higher number.'})
    } else  {
      this.setState({message: 'Sorry, that guess is too high. Try a lower number.'})
    }
  }

  render(){
    return (
      <section>
        <article id="input-form">
          <h1 className="title"> {this.props.title} </h1>
          <p> Your last guess was...</p>
          <p> {this.state.guess} </p>
          <p> {this.state.message} </p>
        </article>
        <article>
          <input placeholder="Your best guess" onChange={this.setGuess.bind(this)}/>
          <button className="submit-btn" onClick={this.compareNumbers.bind(this)}>Submit</button>
          <button className="clear-guess" onClick={this.clearGuess.bind(this)}>Clear</button>
          <button className="reset-game" onClick={this.setRandomNumber.bind(this)}>Reset Game </button>
        </article>
      </section>
    );
  }
}

ReactDOM.render(<Application title='Number Guesser in React' heading='Number Guesser in React'/>, document.getElementById('app'));

module.exports = Application

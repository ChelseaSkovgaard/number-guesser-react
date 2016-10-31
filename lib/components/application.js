const React = require('react');
const ReactDOM = require('react-dom');
import RandomNumberButton from './set-random-num';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      minNum: '',
      maxNum: '',
      randomNumber: '',
      guess: '',
      message: ''
    };
  }

  componentDidMount() {
    this.setRange();
    this.setInitialRandomNumber();
  }

  setRange(){
    this.setState({maxNum: 100});
    this.setState({minNum: 1});
  }

  setInitialRandomNumber(){
    this.setState({randomNumber: (Math.floor(Math.random() * (100 - 1) + 1))});
  }

  setRandomNumber() {
    let max = this.state.maxNum;
    let min = this.state.minNum;
    this.setState({randomNumber: (Math.floor(Math.random() * (max - min) + min))});
  }

  setGuess(event) {
    this.setState({guess: parseInt(event.target.value)});
  }

  setMinumum(event) {
    this.setState({minNum: parseInt(event.target.value)});
  }

  setMaximum(event) {
    this.setState({maxNum: parseInt(event.target.value)});
  }

  clearGuess(){
    this.setState({guess: ''});
  }

  increaseRange(){
  this.setState({minNum: (parseInt(this.state.minNum) - 10)});
  this.setState({maxNum: (parseInt(this.state.maxNum) + 10)});
}

  compareNumbers() {
   if (this.state.randomNumber === this.state.guess){
      this.setState({message: 'Congrats! You guessed the number'});
      this.increaseRange();
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
          <p className="last-guess"> {this.state.guess} </p>
          <p> {this.state.message} </p>
        </article>
        <article>
          <input placeholder="Maximum Number" onChange={this.setMaximum.bind(this)}/>
          <input placeholder="Minimum Number" onChange={this.setMinumum.bind(this)}/>
          <RandomNumberButton text="Set Range" setRandomNumber={this.setRandomNumber.bind(this)} />
        </article>
        <article>
          <input type="number" placeholder="Your best guess" onChange={this.setGuess.bind(this)}/>
          <button className="submit-btn" disabled={this.state.guess === ''} onClick={this.compareNumbers.bind(this)}>Submit</button>
          <button className="clear-guess" disabled={this.state.guess === ''} onClick={this.clearGuess.bind(this)}>Clear</button>
          <RandomNumberButton text="Reset Game" setRandomNumber={this.setRandomNumber.bind(this)} />
        </article>
      </section>
    );
  }
}

ReactDOM.render(<Application title='Number Guesser in React' heading='Number Guesser in React'/>, document.getElementById('app'));

module.exports = Application

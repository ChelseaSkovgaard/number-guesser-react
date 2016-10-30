const React = require('react');
const ReactDOM = require('react-dom');


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: '',
      guess: ''
    };
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
          <button className="submit-guess"> Guess </button>
          <button className="clear-guess">Clear</button>
          <button className="reset-game">Reset Game </button>
        </article>
      </section>
    );
  }
}

ReactDOM.render(<Application title='Number Guesser in React' heading='Number Guesser in React'/>, document.getElementById('app'));

module.exports = Application

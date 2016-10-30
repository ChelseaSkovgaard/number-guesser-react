const React = require('react');
const ReactDOM = require('react-dom');


const SubmitButton =({setRandomNumber}) => {
  return(
  <button className="submit-guess" onClick={() => setRandomNumber()}> Guess </button>

);
};

module.exports = SubmitButton

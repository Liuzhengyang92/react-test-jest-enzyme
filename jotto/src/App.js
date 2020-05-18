import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import { getSecretWord } from './actions';

class App extends React.Component {
  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, secretWord, guessedWords } = state;
  return {
    success: success,
    secretWord: secretWord,
    guessedWords: guessedWords
  }
}

export default connect(mapStateToProps, { getSecretWord })(App);

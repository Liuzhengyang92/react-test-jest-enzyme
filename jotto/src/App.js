import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import { getSecretWord } from './actions';
import Input from './Input';

export class UnconnectedApp extends React.Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={success} />
        <Input />
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

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);

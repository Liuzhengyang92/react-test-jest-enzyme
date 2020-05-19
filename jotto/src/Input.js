import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  /**
   * @method constructor
   * @param {object} props - Component props
   * @returns {undefined} 
   */
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      currentGuess: null
    }
    this.submitGuessWord = this.submitGuessWord.bind(this);
  }
  submitGuessWord(evt) {
    evt.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  }
  render() {
    const content = this.props.success 
    ? null 
    : (
      <form className="form-inline">
        <input 
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={this.state.currentGuess}
          onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
        />
        <button 
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          // onClick={() => this.props.guessWord(this.state.currentGuess)}
          onClick={(evt) => this.submitGuessWord(evt)}
        >
          Submit
        </button>
      </form>
    )
    return <div data-test="component-input">
      {content}
      </div>
  }
};

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);

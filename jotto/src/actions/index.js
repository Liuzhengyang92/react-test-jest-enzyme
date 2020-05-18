import axios from 'axios';

import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export const guessWord = (guessWord) => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessWord, letterMatchCount }
    });

    if (guessWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS })
    }
  };
};

export const getSecretWord = () => {
  return (dispatch) => {
    return axios.get('localhost:3030')
      .then(response => {
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: response.data
        })
      })
  }
}

import React from 'react';

// no default value
const guessedWordsContext = React.createContext();

/**
 * @function useGuessedWords
 * @returns {Array} guessedWordsContext value, which is a state of [value, setter]
 */
export function useGuessedWords() {
  // useContext is a hook that returns the context value
  // In this case, the context value is an [value, setter] array for the context state
  // useContext also subscribes to changes, and will update anytime the context value updates
  // we've memorized this so that it will only update when the guessedWords value updates
  const context = React.useContext(guessedWordsContext);

  if (!context) {
    // throw an error if the context doesn't exist -- means we aren't in a provider
    throw new Error('useGuessedWords must be used within a GuessedWordProvider')
  }

  // otherwise return the context
  return context
}

/**
 * @function GuessedWordProvider
 * @param {object} props 
 * @returns {JSX.Element} Provider component
 */
export function GuessedWordProvider(props) {
  // create state that will be used within the provider
  // initial state value is false
  const [guessedWords, setGuessedWords] = React.useState([]);

  // value for the context provider will be array of [value, setter] for guessedWords state
  // useMemo just ensures that the provider value will only update when guessedWords update
  // No need to test this -- React tests useMemo for us!
  const value = React.useMemo(() => [guessedWords, setGuessedWords], [guessedWords])

  // Return a Provider component with the [value, setter] array as the value, passing
  return <guessedWordsContext.Provider value={value} {...props} />
}

export default { GuessedWordProvider, useGuessedWords };

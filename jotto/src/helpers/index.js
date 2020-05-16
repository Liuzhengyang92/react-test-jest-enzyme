/**
 * @method getLetterMatchCount
 * @param {string} guessedword - React props.
 * @param {string} secretWord - Rendered component (or null if 'success' props is false)
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedword, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedword.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
};

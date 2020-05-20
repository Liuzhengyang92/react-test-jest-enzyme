const languageStrings = {
  en: {
    congrats: 'Congratulations! You guessed the word!',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessedWords: 'Guesses',
    matchingLetterColumnHeader: 'Matching Letters',
  },
  emoji: {
    congrats: '恭喜',
    submit: '提交',
    guessPrompt: '试着猜一下',
    guessInputPlaceholder: '输入词语',
    guessedWords: '猜测',
    guessColumnHeader: '无奈',
    matchingLetterColumnHeader: '正确'
  }
}

function getStringByLanguage(languageCode, stringKey, strings=languageStrings) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`)

    //fall back to english
    return strings.en[stringKey];
  }
  return strings[languageCode][stringKey];
}


// for future mocking
export default {
  getStringByLanguage
}
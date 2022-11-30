function reverseWords(str) {
  const spltArr = str.split(' ');
  
  let reverseLetterWords = [];
  let letterWords = [];
  spltArr.forEach(word=>{
    const letterWord = word.split('')
    letterWords.push(letterWord)
    const reversedletterWord = letterWord.reverse()
    const joinedReverseWord = reversedletterWord.join('');
    reverseLetterWords.push(joinedReverseWord)
  })
  
console.log(reverseLetterWords.join(' '));
  
};


reverseWords('There is at time in wintertime, when I miss you.')

// Level: 7Kyu
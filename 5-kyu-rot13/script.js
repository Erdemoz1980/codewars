function rot13(message) {
  let regexL = /[a-z]/;
  let regexU = /[A-Z]/;
   
  let alphabetL = Array.from(new Array(26)).map((e, i) => String.fromCharCode(i + 97))
  let alphabetU = Array.from(new Array(26)).map(((e, i) => String.fromCharCode(i + 65)))
  let result = [];
   
  for (i = 0; i < message.length; i++) {
    if (regexL.test(message[i])) {
      if (alphabetL.indexOf(message[i]) < 13) {
        result.push(alphabetL[alphabetL.indexOf(message[i]) + 13])
      } else {
        result.push(alphabetL[alphabetL.indexOf(message[i]) - 13])
      }
    } else if (regexU.test(message[i])) {
      if (alphabetU.indexOf(message[i]) < 13) {
        result.push(alphabetU[alphabetU.indexOf(message[i]) + 13])
      } else {
        result.push(alphabetU[alphabetU.indexOf(message[i]) - 13])
      }
    } else {
      result.push(message[i])
    }
  }
   
   
  return result.join('')
}

/*ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".*/
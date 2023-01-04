function changer(str) { 
  const vowelL = /a|e|i|o|u/;
  const consonants = /[bcdfghjklmnpqrstvwxyz]/i

 const split = str.split('');
  
  for(i=0; i<str.length; i++){
    let ascii = str.charCodeAt(i)
    if(ascii>=97&&ascii<122){
      split.splice(i,1,String.fromCharCode(str.charCodeAt(i)+1))
    }else if(ascii>=65&&ascii<90){
      split.splice(i,1,String.fromCharCode(str.charCodeAt(i)+1))
    }else if(ascii===122){
     
      split.splice(i,1,String.fromCharCode(97))
    }else if(ascii===90){
      split.splice(i,1, String.fromCharCode(65))
    }
  }
  

  
  return split.map((e)=>{
    if(vowelL.test(e)){
      return e.toUpperCase();
    }else if(consonants.test(e)){
      return e.toLowerCase()
    }else{
      return e
    }
  }).join('')
    
  
}

/*Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)*/
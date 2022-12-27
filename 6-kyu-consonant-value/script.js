function solve(s) {

  let regex = /a|e|i|o|u/
  let alphabet = Array.from(new Array(26)).map((e,i)=>String.fromCharCode(i+97))
  
  let split = s.split(regex)
  
  let results=[];
  for(i=0; i<split.length; i++){
    if(split[i].length<2){
      results.push(alphabet.indexOf(split[i])+1)
    }else{
      let subResults=[];
      let subSplit = split[i].split('').forEach(e=>{
        return subResults.push( alphabet.indexOf(e)+1)
      });
      results.push(subResults.reduce((acc,item)=>acc+item,0))
      
    }
     
  }
  
  return results.sort((a,b)=>b-a)[0]
  
  
};

/*Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs" */
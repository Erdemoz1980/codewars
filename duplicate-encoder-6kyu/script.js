function duplicateEncode(word){
  const input = word.toLowerCase().split('');
    
  const duplicates={}
  input.forEach(item=>{
    duplicates[item] = (duplicates[item]||0)+1
  })
  
  let result = [];
  for(let i=0; i<input.length;i++){
    if(duplicates[input[i]]<2){
      result.push('(');
    }else{
      result.push(')');
    }
  }
  return result.join('')

}

duplicateEncode('din')



//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
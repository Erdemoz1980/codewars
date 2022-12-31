var encryptThis = function(text) {
  if(text.length===1) return text.charCodeAt(0).toString()  
  
  const words = text.split(' ')

  for(i=0;i<words.length;i++){
    if(words[i].length===1){
       words.splice(i,1,words[i].charCodeAt(0));
      
    }else if (words[i].length===2){
     let ascii = words[i].split('')[0].charCodeAt(0)
     let split = words[i].split('');
     split.splice(0,1,ascii)
     let joined = split.join('')
     words.splice(i,1,joined);
      
    
  }else{
    let ascii = words[i].split('')[0].charCodeAt(0);
    let split = words[i].split('');
    split.splice(0,1,ascii);
  
    let second = split[1];
    let last = split[split.length-1]
    split.splice(1,1,last)
    split.splice(split.length-1,1,second);
    let joined = split.join('')
    words.splice(i,1,joined)
    
  }
  
  }
  
  return words.join(' ')
  }
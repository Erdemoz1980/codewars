String.prototype.toJadenCase = function () { 
  return this.split(" ").map(word=>{
    return word.replace(word[0], word[0].toUpperCase())
  }).join(' ');
  

};

//Turn each word in uppercase.
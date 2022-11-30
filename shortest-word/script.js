function findShort(s){
  const words = s.split(' ');
  
  const splitWrdsArr = words.map(word=>{
     return word.split('')
  })
  
  const sorted = splitWrdsArr.sort((a,b)=>a.length-b.length)

  return sorted[0].length;
 
}
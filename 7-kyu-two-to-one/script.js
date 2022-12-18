function longest(s1, s2) {
 
  
  const arr = (s1+s2).split('');
  
   
  const sorted = arr.sort();
  
  let duplicates = {};
  
  sorted.forEach(item=>{
    duplicates[item] = (duplicates[item]||0)+1
  })

  return Object.keys(duplicates).join('')
 
}

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
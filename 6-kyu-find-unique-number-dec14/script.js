function findUniq(arr) {

  let duplicates = {};
  
  //Create list of duplicates
  arr.forEach(n=>{
    duplicates[n] = (duplicates[n] || 0)+1
  });
  
  let result;
  arr.forEach(n=>{
    const key = n.toString();
   if(duplicates[key]===1) return result=n
  })
   
  console.log(duplicates)
 return result
}


//Find the unique number

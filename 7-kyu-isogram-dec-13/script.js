function isIsogram(str){
  if(str==="")return true

  const strArr = str.toLowerCase().split('');
  console.log(strArr)
  
  let duplicates = {};
  
  strArr.forEach(item=>{
   duplicates[item] = (duplicates[item] || 0)+1
  })

  let result;
   
  for(i=0; i<strArr.length;i++){
    if (duplicates[strArr[i]]>1) return false;
    result = true
  }
  
  return result
}



//It was a decent challenge. Took me two attempts on different days. Second attempt was easier after having learned on 6kyu kata's.


//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
/*
Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false*/
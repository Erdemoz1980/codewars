function wave(str){
  let arrInput =[];
  let indexRemove=[];
  let result = [];
  const regex = /\s/

  for(i=1;i<=str.length;i++){
    arrInput.push(str)
  };  
    
      for(i=0;i<arrInput.length; i++){
        if(regex.test(arrInput[i][i])){
      indexRemove.push(i);
      
      const cappedChar = arrInput[i][i+1]?.toUpperCase();
      const duplicateItemArr = arrInput[i].split('');
      duplicateItemArr.splice(i+1,1,cappedChar);
      result.push(duplicateItemArr.join(''))
      
     }else{
         const cappedChar = arrInput[i][i].toUpperCase();
       const duplicateItemArr = arrInput[i].split('');
       duplicateItemArr.splice(i,1,cappedChar);
       result.push(duplicateItemArr.join(''))
     }
  }
  
    if(indexRemove.length>0){
      for(i=0;i<indexRemove.length;i++){
        result.splice(i,1);
        return result
      }   
    }else{
      return result
    }
    
}

//MY SECOND SOLUTION THAT ACTUALLY WORKS!
function wave(str){
  const split = str.split('');
  let indexSpace = {};
  
  //Determine the white space index(es)
  split.forEach((item,index)=>{
   if(item===' '){
     indexSpace[index] = index
   }
  })
  
  console.log(indexSpace)
  
  //Create an array of replicated input items
  let arrInput = [];
  for(i=0;i<str.length;i++){
    arrInput.push(str);
  }
  

  
  //Capitalize each element
  let result = [];
  for(i=0;i<arrInput.length;i++){
    const cappedChar = arrInput[i][i].toUpperCase();
    const duplicateItemArr = arrInput[i].split('');
    duplicateItemArr.splice(i,1,cappedChar);
    result.push(duplicateItemArr.join(''));
  }


  return Object.keys(indexSpace).length>0 ? result.filter((item,index)=>{
    return index !==indexSpace[index]
  }) : result;
 
  
}

//Really pushed me hard.I found it one of the most difficult but enjoyable ones!

/*ask
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]*/
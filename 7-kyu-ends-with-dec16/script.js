function solution(str, ending){
 
  let result=[];
  let count = 0
  for(i=(str.length-ending.length);i<str.length;i++){
      if(str[i] === ending[count]) result.push(str[i]);
     count++
  }
   
  return result.join('')===ending ? true :false
  
}

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
/*
Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

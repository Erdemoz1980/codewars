function stray(numbers) {
  let count = {}
  
  numbers.forEach(item=>{
    return count[item] ? count[item]++ : count[item]=1;
  })
  let result = [];

  for(i=0; i<numbers.length;i++){
    if(count[numbers[i]?.toString()]===1){
      result.push(numbers[i])
    }
  }
  
  console.log(result[0])
  return result[0]
}

/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/
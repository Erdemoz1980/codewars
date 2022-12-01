function highAndLow(numbers){
  const sorted = numbers.split(' ').sort((a,b)=>b-a)
  
  let result =[]
  
  const sortedNumbers = sorted.map(item=>{
     return Number(item)
   })
   
   for (let i=0;i<sortedNumbers.length;i++){
     if(sortedNumbers.length===1)
       result.push(sortedNumbers[0])
     if(i===0){
       result.push(sortedNumbers[i])
     }else if(i===sortedNumbers.length-1){
       result.push(sortedNumbers[i])
     }
   };
   

   return result.join(' ')
  }
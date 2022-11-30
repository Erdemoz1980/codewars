var summation = function (num) {

  const newArray = new Array(num)
  newArray.fill('', 0,num);
    
   const numbers = newArray.map((item, index)=>{
     return index+1
   })
    
    return numbers.reduce((acc, number)=>acc+number)
  }
function findEvenIndex(arr){
  
  let result=0;
  for(i=0;i<arr.length;i++ ){    
    let rightSideSum = arr.slice(i+1,arr.length).reduce((acc,item)=>acc+item,0);
    let leftSideSum = arr.slice(0,i).reduce((acc,item)=>acc+item,0);
    if(rightSideSum===leftSideSum) return result+=i
  
  }
    return result===0 ? -1 : result
  
}

//
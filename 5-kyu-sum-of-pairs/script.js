function sumPairs(ints, sum) {
  
  let indices =[];
  for(i=0; i<ints.length;i++){
    let difference = sum-ints[i];
    if(ints.indexOf(difference)>-1 && i!==ints.indexOf(difference)){
      indices.push(i,ints.indexOf(difference))
    }    
  }
   if(indices.length===0) return undefined

   let pairs = []
   if(indices.length>=4){
     for(i=0; i<indices.length; i+=2){
       pairs.push([indices[i],indices[i+1]])
     }
     
     let pairsSorted = pairs.map(e=>e.sort((a,b)=>a-b)).sort((a,b)=>a[1]-b[1])
     
     return [ints[pairsSorted[0][0]], ints[pairsSorted[0][1]]]
    
   }

  return [ints[indices[0]], ints[indices[1]]]

}


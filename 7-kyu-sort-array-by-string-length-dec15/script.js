function sortByLength (array) {

  let itemLengths = [];
  array.forEach(item=>{
    const split = item.split('');
    itemLengths.push(split.length);
  })
 
 itemLengths.sort((a,b)=>a-b);
 
  let result = [];
 for(i=0; i<itemLengths.length;i++){
    array.forEach(item=>{
     if(item.length===itemLengths[i]){
       result.push(item)
     }
    })
 }
 
 return result
 
};


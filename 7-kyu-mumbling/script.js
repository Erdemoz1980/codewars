function accum(s) {
	
  const arrInput = s.split('');
    
 let duplicates = []
  
  function repeater (element, n){  
    for(i=0;i<=n;i++){
      duplicates.push(element.toLowerCase())
    }
  }
  
  //Create duplicates based on index
  arrInput.forEach((item,index)=>{
    repeater(item,index)
  });
  
//Insert dashes    
let dashed = [];  
for(i=0; i<duplicates.length;i++){
  if(duplicates[i]!==duplicates[i+1]){
    dashed.push(duplicates[i]);
    dashed.push('-')
    
  }else{
    dashed.push(duplicates[i])
  }
}
  
  //Capitilize letters
  let capped = [];
  
   for(i=0;i<dashed.length;i++){
     if(dashed[i]===undefined) return;
     if(i===0){
       capped.push(dashed[i].toUpperCase())
     }else if(dashed[i-1]==='-'){
         capped.push(dashed[i].toUpperCase());
     }else{
       capped.push(dashed[i])
     }
   }


  return dashed
}

accum('accessoires')
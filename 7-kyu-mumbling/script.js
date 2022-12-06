function accum(s) {
	
  const arrInput = s.split('');
    
 let duplicates = []
  
  function repeater (element, n){  
    for(i=0;i<=n;i++){
      duplicates.push(element.toLowerCase())
    }
    duplicates.push('-')
  }
  
  //Create duplicates based on index
  arrInput.forEach((item,index)=>{
    repeater(item,index)
  });
  
  
  //Capitilize letters
  let capped = [];
  
   for(i=0;i<duplicates.length;i++){
     if(i===0){
       capped.push(duplicates[i].toUpperCase())
     }else if(duplicates[i-1]==='-'){
         capped.push(duplicates[i].toUpperCase());
     }else{
       capped.push(duplicates[i])
     }
   }


  capped.pop()
  return capped.join('')
}

accum('accessoires')

/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
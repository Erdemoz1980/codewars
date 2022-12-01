function XO(str) {
  const chars = str.split('');
      
  const lowerCaseChars = chars.map(item=>item.toLowerCase())
  
  let xos = {};
   lowerCaseChars.forEach(item=>{
     xos[item] = (xos[item] || 0)+1
   })
  
  return xos.x === xos.o ? true :false
    

}


XO('xoxoo')

//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive.The string can contain any char.
function dirReduc(arr){
    
  const opposites = {
    NORTH:'SOUTH',
    SOUTH:'NORTH',
    WEST:'EAST',
    EAST:'WEST'
  };
    
 for(i=0;i<arr.length;i++){
   if(arr[i+1]===opposites[arr[i]]){
     arr.splice(i,2)
   } 
 }
  
   for(i=0;i<arr.length;i++){
   if(arr[i+1]===opposites[arr[i]]){
     arr.splice(i,2)
   } 
 }
  
 
  return arr

  
}

/*
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
*/
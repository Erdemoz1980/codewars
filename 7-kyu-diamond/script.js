function diamondBurglar(locker){
  let count=0;
for(i=0;i<locker.length;i++){
  let split = locker[i].split('.');
  for(j=0;j<split.length;j++){
    if(split[j]!==''){
      count+= Math.ceil(split[j].length/2)
    }
  }
  
}  

return count;
 
}
function mxdiflg(a1, a2) {
  if(a1.length===0 || a2.length===0 ) return -1
    
    let result = [];
    for(i=0; i<a1.length;i++){
      for(j=0;j<a2.length;j++){
        result.push(Math.abs(a1[i].length-a2[j].length))
      }
      
    }
    
    return result.sort((a,b)=>b-a)[0]
  
}
    /*You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))*/
function longestConsec(strarr, k) {
  if (strarr.length < 1 || k <= 0 || k > strarr.length) return ''
  
  const result = [];
    for (let i = 0; i < strarr.length - k + 1; i++) {
      result.push(strarr.slice(i, i + k).join(''));
    }
    
    return result.sort((a,b)=>b.length-a.length)[0]
  
}
  
/*You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
*/
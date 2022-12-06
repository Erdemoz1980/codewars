function accum(s) {
  const result = s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))) /*.join('-');*/
  
  console.log(result);
}


accum('Errdem');
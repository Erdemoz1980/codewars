function updateLight(current) {
  
  const output = {
    green:'yellow',
    yellow:'red',
    red:'green'
  };
  
  return output[current]
}

//Really like this kind of logic!
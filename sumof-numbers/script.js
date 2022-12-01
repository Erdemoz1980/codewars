function getSum(a,b)
{
  if (a === b) return a;
  
  const input = [a,b];
  const sorted = input.sort((a,b)=>a-b);
  
  let numberOfInts = new Array((sorted[1]-sorted[0])+1)
  
  let integers = [];

  for (let i = 0; i < numberOfInts.length; i++){
    integers.push(sorted[0]+i)
  }

  const total = integers.reduce((total, item) => total + item);

  console.log(total);

}


getSum(-8, 3);

//Get sum of all integers between the inputs, including the inputs.
//The input numbers can be positive or negative
//If both inputs are the same return a or b
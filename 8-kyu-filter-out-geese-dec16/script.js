function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
 let result = [];


  for(i=0;i<birds.length;i++){
    const found = geese.find(goose=>{
      return goose===birds[i]
    })
    !found && result.push(birds[i])
  }
     
 return result

};

//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
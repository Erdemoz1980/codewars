function friend(friends){

  let trueFriends = [];  
  for (i=0;i<friends.length;i++){
    const name = friends[i].split('');
    if(name.length===4){
      trueFriends.push(name)
    } 
    
  }
  
return trueFriends.map(item=>{
    return item.join('');
  })

  }
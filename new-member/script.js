function openOrSenior(data) {

  let splitArr = [];
    
  data.forEach((item) => {
    splitArr.push(item);
  })
    
    
  return members = splitArr.map(item => {
    if (item[0] < 55) {
      return 'Open'
    } else if (item[0] >= 55 && item[1] > 7) {
      return 'Senior'
    } else {
      return 'Open'
    }
  })
};

//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//Input
//Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
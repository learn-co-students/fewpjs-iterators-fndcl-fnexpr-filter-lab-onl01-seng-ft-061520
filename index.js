function findMatching(drivers, string){
  let match = drivers.filter(n => {
    return n.toLowerCase() === string.toLowerCase();
  });
  return match;
}

function fuzzyMatch(drivers, string){
  let match = drivers.filter(n => {
    const letters = n.split('')
    const matchLetters = string.split('')
    for (let i = 0; i < string.length; i++) {
      if (letters[i] === matchLetters[i]){
        return n;
      };
    };
  });
  return match;
}

function matchName(drivers, string){
  let match = drivers.filter(n => {
    return n.name === string;
  });
  return match;
}

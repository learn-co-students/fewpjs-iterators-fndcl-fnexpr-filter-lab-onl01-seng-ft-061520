// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter( possiblematch =>
    possiblematch.toLowerCase() === string.toLowerCase()

  )
}



function fuzzyMatch(drivers, string) {
  return drivers.filter( possiblematch =>
    possiblematch.toLowerCase().indexOf(string.toLowerCase()) === 0 

  )
}



function matchName(drivers, string) {
  return drivers.filter( record => record.name === string)
}


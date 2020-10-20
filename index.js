// Code your solution here
function findMatching(drivers, target){
  let reg = new RegExp(target, 'gi');
  let result = drivers.filter(t => t.match(reg));
  return result;
}

function fuzzyMatch(drivers, target){
  let reg = new RegExp(`^[${target}]\\w*`)
  let result = [];
  result = drivers.filter(t => t.match(reg));
  return result;
}

function matchName(drivers, target){
  let result = drivers.filter(t => t.name === target);
  return result;
}

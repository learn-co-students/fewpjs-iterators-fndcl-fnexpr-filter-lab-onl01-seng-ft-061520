// Code your solution here

// drivers.filter(function (name) {
//   return name === "BJ";
// }); - worked in console when comparing to drivers array

function findMatching(drivers, nameString) {
  return drivers.filter(
    (name) => name.toLowerCase() === nameString.toLowerCase()
  );
}

// SECOND: W3 SCHOOLS startswith

function fuzzyMatch(drivers, letters) {
  // first_letters = letters.map(letters => letters.length[0]);
  // first_letters = animals.map(x => x[0]);

  return drivers.filter((name) => name.startsWith(letters));
}

// THIRD

function matchName(drivers, string) {
  return drivers.filter((driver) => driver.name === string);
}

// digitalocean filter
// var heroes = [
//   { name: “Batman”, franchise: “DC”},
// { name: “Ironman”, franchise: “Marvel” },
// { name: “Thor”, franchise: “Marvel” },
// { name: “Superman”, franchise: “DC” }
// ];

// var marvelHeroes = heroes.filter(function (hero) {
//   return hero.franchise == “Marvel”;
// });

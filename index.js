// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(e => {
	return e.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(e => {
	return e[0] === string[0];
    })
}

function matchName(drivers, string) {
    return drivers.filter(e => {
	return e.name === string;
    })
}


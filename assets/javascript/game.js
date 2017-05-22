$(document).ready(function() {

	var targetNumber = 19 + Math.floor(Math.random() * 120);
	var crystalValues = [];
	//Now to assign attributes to each Crystal

	for (var i = 0 i < 3; i++) {
		crystalValues[i] = 1 + Math.floor(Math.random() * 12);
		console.log(crystalValues);
	}
};
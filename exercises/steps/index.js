// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// MY SOLUTION #1
function steps(n) {
	var pound = " ".repeat(n);

	for(var i = 0; i < n; i++){
		pound = pound.replace(/ /i, "#");
		console.log(pound);
	}
}

// MY SOLUTION #2
// function steps(n) {
// 	for(var i = 0; i < n; i++){
// 		var spaces = " ".repeat(n-i-1);
// 		var pounds = "#".repeat(i+1);
// 		var log = pounds + spaces;
// 		console.log(log);
// 	}
// }

module.exports = steps;

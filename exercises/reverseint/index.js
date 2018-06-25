// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// var preamble = [];
	// var workingStr = n.toString().split("");
	// if(workingStr[0] === '-'){
	// 	preamble[0] = '-';
	// }
	// reversedArr = preamble.concat(workingStr.reverse());
	// reversed = reversedArr.join('');

	// return parseInt(reversed);

	//alternative
	return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;

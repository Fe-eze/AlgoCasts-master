 // --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var characterCount = {};

	// MY SOLUTION
	// for(var i=0; i<str.length; i++){
	// 	characterCount[str[i]] = 0;
	// }

	// for(var i=0; i<str.length; i++){
	// 	characterCount[str[i]] += 1;
	// }

	// var maxNum = Math.max.apply(null, Object.values(characterCount));

	// for(var key in characterCount){
	// 	if(characterCount[key] === maxNum){
	// 		maxKey = key;
	// 	}
	// }

	// STEVE's condensed boolean solution edited to classic for loop
	// for(var i=0; i<str.length; i++){
	// 	characterCount[str[i]] = characterCount[str[i]] +1 || 1;
	// }

	// STEVE's solution
	let max = 0;
	let maxKey = '';

	for (let char of str){
		characterCount[char] = characterCount[char] + 1 || 1;
	}

	for (let char in characterCount){
		if(characterCount[char] > max){
			max = characterCount[char];
			maxKey = char;
		}
	}

	return maxKey;
}

module.exports = maxChar;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	var modifiedStr = "";
	for (var i = str.length; i > 0; i--){
		modifiedStr += str[i-1];
	}
	return modifiedStr;
}

module.exports = reverse;

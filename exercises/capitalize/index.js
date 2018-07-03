// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	// MY SOLUTION
	// var stra = '';
	// stra += str[0].toUpperCase();

	// for (var i = 1; i<str.length; i++){
 // 		if(str.charCodeAt(i) === 32){
 // 			stra += " " + str[i+1].toUpperCase();
 // 			i++;
 // 		}
 // 		else{
 // 			stra+= str[i];
 // 		}
 // 		}
	// return stra;

	// INSTRUCTOR'S SOLUTION
	const words = [];

	for (let word of str.split(' ')){
		words.push(word[0].toUpperCase() + word.slice(1))
	}
	return	words.join(' ');
}

module.exports = capitalize;

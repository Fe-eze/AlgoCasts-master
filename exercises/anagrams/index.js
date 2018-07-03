// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
	stringB = stringB.replace(/[^\w]/g,"").toLowerCase();

	var olmapA = {};
	var olmapB = {};

	for(let char of stringA){
		olmapA[char] = olmapA[char] + 1 || 1;
	}
	for(let char of stringB){
		olmapB[char] = olmapB[char] + 1 || 1;
	}

	if(Object.keys(mapA).length > Object.keys(mapB).length){
		// var longerMap = mapA;
		// var shorterMap = mapB;
		return false;
	}
	else if(mapA.sort() !== mapB.sort()){
		return false;
	}
	else{
		// var longerMap = mapB;
		// var shorterMap = mapA;
	
		for (let i=0; i<mapA.length; i++){
			if(Object.values(mapA)[i] !== Object.values(mapB)[i]){
				return false;
			}
		}
		return true;
	}
}

function buildCharMap(str){
	
}

module.exports = anagrams;

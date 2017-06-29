//counters
var wins = 0;
var losses = 0;
var guesses = 10;
var lettersUsed = [];

//words 
var words = [
['i','m','p'],
['d','r','a','g','o','n'],
['c','h','i','m','e','r','a']
]

var shownWord = [];
var currentWord;

//choose word
function pickWord() {
	var randomWord = Math.floor(Math.random()*3)
	    switch(randomWord) {
	    	case 0: 
	    	  return words[0];
	    	case 1:
	    	  return words[1];  
	    	case 2:
	    	  return words[2]        
	    }
}


//display letters as -
function hideword() {
	currentWord = pickWord();
	 for (var i = 0; i < currentWord.length; i++){
	 	shownWord.push('-')
 }
}




//Display letters used
function keyLogger(e) {
	lettersUsed.push(event.key);
	writeLetters();
}

function writeLetters () {
	document.getElementById('LettersUsed').innerHTML =lettersUsed;
}




hideword ();
document.getElementById('word').innerHTML = shownWord.join(" ");


document.onkeyup = keyLogger



document.onkeyup = function () {
	var currentLetter = (event.key);

	for (i = 0; i < currentWord.length; i++) {
		if (currentLetter===currentWord[i]) {
			shownWord[i] === currentLetter;

		}
	}
}














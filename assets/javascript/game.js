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
];

var shownWord = [];
var currentWord = [];
var currentLetter;

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
};

//display letters as -
function hideword() {
	shownWord = [];
	lettersUsed = [];
	guesses = 10;
	currentWord = pickWord();
	 for (var i = 0; i < currentWord.length; i++){
	 	shownWord.push('-')
 }
}

//Display letters already used
function keyLogger (e) {
	for (var i = 0; i < currentWord.length; i++) {
		if (event.key !== lettersUsed[i]) {
			lettersUsed.push(event.key);
		}
	}
	writeLetters();
}

function keyLogger(e) {

}

function writeLetters () {
	document.getElementById('LettersUsed').innerHTML = lettersUsed;
}

hideword ();

//change the - to corrent letter in correct the place
document.onkeyup = function (e) {
	keyLogger ();
	currentLetter = (event.key);

	for (var i = 0; i < currentWord.length; i++) {
		if (currentLetter === currentWord[i]) {
			shownWord[i] = currentLetter;
		};
	};

	guesses--;
	display();
	if (guesses === 1) {
		losses++;
		hideword ();
	} else if(shownWord[] === currentWord[]) {
		wins++;
		hideword ();
	}
};
function checkWin () {
	if (currentWord.length === shownWord.length) {
		for (var i = 0; i < currentWord.length; i++)
			if (currentWord[i] === shownWord[i]) {
				console.log("running through the for loop: " + i);
				return true;
			}
	}
}
function display() {
	document.getElementById('word').innerHTML = shownWord.join(" ");
    document.getElementById('www').innerHTML = wins;
    document.getElementById('lll').innerHTML = losses;
    document.getElementById('lives').innerHTML = guesses;
}
display ();

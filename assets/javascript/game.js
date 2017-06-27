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
for (var i = 0; i < pickWord.length; i++){
	pickWord[i] = "- ";
}

document.getElementById('word').innerHTML = pickWord();




//Display letters used
function logger (e) {
	lettersUsed.push(event.key);
	writeLetters();
}

function writeLetters () {
	document.getElementById('LettersUsed').innerHTML =lettersUsed;
}

document.onkeyup = logger














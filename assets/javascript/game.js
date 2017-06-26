//counters
var wins = 0;
var losses = 0;
var guesses = 10;

var lettersUsed = ['u','i'];

//words 
var word0 = ['i','m','p'];
var word1 = ['d','r','a','g','o','n'];
var word2 = ['c','h','i','m','e','r','a']

var words = [[word0],[word1],[word2]];



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
document.getElementById('word').innerHTML = pickWord();


document.onkeyup = function (event){
	var letters = document.onkeyup
	lettersUsed.push (letters)

};



// display letters used

document.getElementById('LettersUsed').innerHTML = lettersUsed[];
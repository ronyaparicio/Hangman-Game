let hangman = {
  wins: 0,
  losses: 0,
  guessesLeft: 5,
  lettersUsed: [],
  words:[
    'word',
    'longerword',
    'pokemon',
    'dragonBall'
  ],
  shownWord: [],
  currentWord: null,
  currentLetter:null,
  pickWord: ()=>{
    let x = Math.floor(Math.random()*3);
    switch(x) {
      case 0:
        hangman.currentWord = hangman.words[0].split(['']);
        break;
      case 1:
        hangman.currentWord = hangman.words[1].split(['']);
       break;
      case 2:
        hangman.currentWord = hangman.words[2].split(['']);
        break;
      case 3:
        hangman.currentWord = hangman.words[3].split(['']);
        break;
    }
  },
  hideword: ()=>{ hangman.currentWord.forEach(() => {hangman.shownWord.push('-')})},
  checkletter: ()=>{
    hangman.currentLetter = event.key;
    hangman.lettersUsed.push(hangman.currentLetter);
    switch (hangman.currentWord.includes(hangman.currentLetter)) {
      case true:
          for (let i = 0; i < hangman.currentWord.length; i++) {
            if (hangman.currentLetter === hangman.currentWord[i]) {
              hangman.shownWord[i] = hangman.currentLetter;
            }
          }
        break;
      case false:
        hangman.guessesLeft--
        break;
    }
  },
  updateDisplay: () => {
    document.getElementById('word').innerHTML = hangman.shownWord.join(" ");
    document.getElementById('www').innerHTML = hangman.wins;
    document.getElementById('lll').innerHTML = hangman.losses;
    document.getElementById('lives').innerHTML = hangman.guessesLeft;
    document.getElementById('LettersUsed').innerHTML = hangman.lettersUsed;
  },
  checkWin: () => {
    for (let y = 0; y < hangman.currentWord.length; y++) {
      if (hangman.shownWord[y] !== hangman.currentWord[y]) {
        return false;
      }
    }
    return true;
  },
  reset: () => {
    if (hangman.guessesLeft === 0) {
    	hangman.lettersUsed = [];
    	hangman.guessesLeft = 5;
    	hangman.losses++;
    	hangman.pickWord();
    	hangman.hideword();
    	hangman.updateDisplay();
    } else if (hangman.checkWin()) {
      hangman.lettersUsed = [];
      hangman.guessesLeft = 5;
      hangman.wins++;
      hangman.pickWord();
      hangman.hideword();
      hangman.updateDisplay();
    }

  }
}

hangman.pickWord();
hangman.hideword();
hangman.updateDisplay();

document.onkeyup = () => {
  hangman.checkletter();
  hangman.updateDisplay();
  hangman.checkWin();
  hangman.reset();
  console.log(hangman.shownWord);
  console.log(hangman.currentWord);
  console.log(hangman.checkWin());
};

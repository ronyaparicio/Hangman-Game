let hangman = {
  wins: 0,
  losses: 0,
  guessesLeft: 5,
  lettersUsed: [],
  words:[
    'samurai jack',
    'avatar the last airbender',
    'pokemon',
    'dragon ball'
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
  checkletter: () => {
    hangman.currentLetter = event.key;
    lettersUsed.push(hangman.currentLetter);
    switch (hangman.currentWord.includes(hangman.currentLetter)) {
      case true:
          for (let i = 0; i < hangman.currentWord.length; i++) {
            if (hangman.currentLetter === hangman.currentWord[i]) {
              hangman.shownWord[i] = hangman.currentLetter;
            };
          };
        break;
      case false:
        hangman.guessesLeft--;
        break;
    }
  };
  updateDisplay: ()=>{
    document.getElementById('word').innerHTML = shownWord.join(" ");
    document.getElementById('www').innerHTML = wins;
    document.getElementById('lll').innerHTML = losses;
    document.getElementById('lives').innerHTML = guesses;
  }
  checkWin: () => {
    if (hangman.guessesLeft === 1) {
      losses++;
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

};

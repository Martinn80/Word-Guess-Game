// create wordlist array
var wordlist = ['tiger', 'lion', 'eagle', 'bear', 'monkey', 'lemur', 'snake', 'flamingo']

// Randomly choose word from wordlist array
var randomNum = Math.floor(Math.random() * wordlist.length);

// Variables
// add guesses left and game reset, win & lose
var choosenWord = wordlist[randomNum];
var underScore = [];
var rightLetter = [];
var wrongLetter = [];
var guesses = 10;


// Dom manipulation
var answerUnderscore = document.getElementsByClassName('underScore');
var answerRight = document.getElementsByClassName('rightGuess');
var answerWrong = document.getElementsByClassName('wrongGuess');

// Testing
console.log(choosenWord);

// Create underscore based on length of word
var generateUnderscore = () => {
    for (var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}


// Get user's guess
document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);

    // If user chooses a correct letter
    if (choosenWord.indexOf(keyword) > -1) {

        // If right push to right array
        rightLetter.push(keyword);

        // replace underscore with correct letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        answerUnderscore[0].innerHTML = underScore.join(' ');
        answerRight[0].innerHTML = rightLetter;

        // Checks to see if guesses match answer
        if (underScore.join('') == choosenWord) {
            alert('Congratulations You Win!!!');
            randomNum = Math.floor(Math.random() * wordlist.length);
            choosenWord = wordlist[randomNum];
            guesses = 10;

        }
    }
    else {
        //  If wrong push to wrong array
        wrongLetter.push(keyword);
        answerWrong[0].innerHTML = wrongLetter;

    }
    if (guesses < 1) {
        wrongLetter++;
        alert('You Lose!!!');
        randomNum = Math.floor(Math.random() * wordlist.length);
        choosenWord = wordlist[randomNum];
        guesses = 10;
    }


});

answerUnderscore[0].innerHTML = generateUnderscore().join(' ');




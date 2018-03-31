// Words to Choose From //
var words = [
    'Como', 
    'Turin', 
    'Grenoble', 
    'Chamonix', 
    'Grindelwald', 
    'Schwyz', 
    'Vaduz', 
    'Innsbruck', 
    'Klagenfurt', 
    'Ljubljana', 
    'Cortina d\'Ampezzo'
];
console.log(words);

// Player inputs //
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var underScore = [];
var incorrectGuesses = [];
var correctGuesses = [];
var playerGuesses = [];
var attemptsLeft = 6;
var destinationsLeft = 11;
var currentWord;
console.log(alphabet);

// Functions //

/////// Display word to guess //////
function startGame(){
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);
    for (i = 0; i < currentWord.length; i++) {
        console.log(i);

        underScore.push('_');
        console.log(underScore);

    }
    // Print destination to the screen //
    document.getElementById("#word").textContent = underScore.join(" ");
    
    // Print guesses to screen
    incorrectGuesses = [];
    document.getElementById("#your-guesses").textContent = incorrectGuesses.join("");
    
    // print attempts left to screen
    attemptsLeft = 6;
    document.getElementById("#lives-remaining").textContent = incorrectGuesses;
}

function winLose () {
        if(correctGuesses === currentWord.length) {
            alert("Winner!");
        }
        else if (attemptsLeft === 0) {
            alert("You Lose...");
        }
    
    // Documenting Players Guesses
    document.onkeyup = function (event) {
        playerGuesses = event.key;
        
        // Checking if player's guess is in the word
        if (playerGuesses.indexOf(currentWord) >-1 ) {

            for (var i=0; i < currentWord.length; i++) {

                if(currentWord[i] === playerGuesses); {
                    underScore[i] = playerGuesses;

                    // Win Counter
                    correctGuesses++;
                }
            }
        }
        else {
            //Loss Counter
            incorrectGuesses.push(playerGuesses);
            attemptsLeft--;
        }
    }
}





    
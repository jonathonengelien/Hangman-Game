
///////////////////// Sections ////////////////////////

// Variables //

// Hints //
// var destinationHints = [
//     "The City the Belagio Resort from Ocean\'s 11 Is Inspired By", 
//     "Host City of the 2006 Winter Olympics", 
//     "", 
//     "", 
//     "", 
//     "", 
//     "", 
//     "", 
//     "", 
//     "",
// ];

// Words to Choose From //
var words = [
    "Como", 
    "Turin", 
    "Grenoble", 
    "Chamonix", 
    "Grindelwald", 
    "Schwyz", 
    "Vaduz", 
    "Innsbruck", 
    "Klagenfurt", 
    "Ljubljana", 
    "Cortina d'Ampezzo",
];

// Player inputs //
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var underScore = [];
var playerGuesses = [];
var attemptsLeft = 6;
var destinationsLeft = 11;




// Functions //

/////// Display word to guess //////
function startGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);
}

    // Calculate the underscores for the destination word
    var generateUnderscores = function() {
       
        for (var i = 0; i < currentWord.length; i++) {
            underScore.push("_");
        }
        return underScore;

    };
    console.log(generateUnderscores());
   

    // Display underscores in document
    document.querySelector("#next-destination").innerHTML = underScore;

    /////// Display hint of word to guess //////
    //for (var i=0; i < destinationHints.length; i++) {
        // Pick next word in the variable
            //var hint = destinationHints[i];
        
        // Display the nextDestination
            //document.querySelector("#hint").innerHTML = hint;
   // }


    // Add event listener for players guesses
    document.onkeyup = function(event) {
        var userGuess = event.key;

    };

    //Loop until all letters have been guessed or number of guesses is 0
    
    

    // While the word has not been guessed {
    
        //  Show the player their current progress

        //  Get a guess from the player

        //  If letter is correct 
            // Display letter(s) in word

        //  Else If letter is incorrect 
            // Add letter to playerGuesses array
            // Subtract 1 from attempts-left




// Congratulate the player on guessing the word




    // Number of destinations left goes down -1

    // Letter guesses is cleared

    // Number of attempts left goes back up to 6


// If player finishes word, move hiker to next destination


// If all words are guessed correctly

    // Display "You Win" Image


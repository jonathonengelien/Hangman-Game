


// Create an array with our words.
    // var gameWords = [ "recalcitrant", "obsequious", "demure", "paroxysm"];
//Start the game with a user input
//Pick a random word from the gameWords array
//Display the word as a series of blanks
//Get an input from the player
//If the letter that the player chose is part of the word, update them on their progress.
//If the letter that the player chose is not part of the word...
    //...log the word in a bank
    //...and take a point away from the player's remaining guesses
//If the player runs out of guesses...
    //...alert them that the game is over
//If the player guesses all of the letters in the word...
    //...alert them that they got a win
    //...add a point to their "win box"
    //...display the definition of the word
    //...generate a new puzzle with a different random word





/////////////// My Workflow //////////////////////
// Declare Variables //
//// Letters ////
//// Words ////
//// Randon Number ////
//// On keyup ////



///////////////////// Sections ////////////////////////

$(document).ready(function() {

// Variables //

// Hints //
var destinationHints = [
    "The City the Belagio Resort from Ocean\'s 11 Is Inspired By", 
    "Host City of the 2006 Winter Olympics", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "", 
    "",
];

// Words to Choose From //
var destinations = [
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
var playerGuesses = [''];



// Functions //

/////// Display word to guess //////

// For-loop until all destination variables have been shown
for (var i=0; i < destinations.length; i++) {
// Pick next word in the variable
    document.getElementById("next-destination").innerHTML = destinations[i];

    
// Display the nextDestination

//Loop until all letters have been guessed or number of guesses is 0
    for (var i=0; i < destinations.length; i++);
    // While the word has not been guessed {

        //  Show the player their current progress

        //  Get a guess from the player

        //  If letter is correct 
            // Display letter(s) in word

        //  Else If letter is incorrect 
            // Add letter to playerGuesses array
            // Subtract 1 from attempts-left

}


// Congratulate the player on guessing the word




    // Number of destinations left goes down -1

    // Letter guesses is cleared

    // Number of attempts left goes back up to 6


// If player finishes word, move hiker to next destination


// If all words are guessed correctly

    // Display "You Win" Image


});
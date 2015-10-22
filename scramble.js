var WORDS     = ["booger", "apple", "hackbright", "mango", "lentil", "popcorn", "python", "library", "magazine", "street"];
var SCRAMBLED = ["oogreb", "papel", "backrhight", "goman", "teilln", "copornp", "yphtno", "yrlirba", "zamagien", "treste"];

var playing = true;

function scramble(word) {

    var letters = word.split("");

    var scrambledWord = "";

    while (letters.length > 0) {
        var randomNum = Math.floor(Math.random() * letters.length);

        var letter = letters.splice(randomNum, 1);

        scrambledWord += letter;
    }

    return scrambledWord;
}

// Grab a random word from the WORDS array
var randomNum = Math.floor(Math.random() * 10);
var randomWord = WORDS[randomNum];

// Grab the corresponding scrambled word from the SCRAMBLED array
scrambledWord = scramble(randomWord);
$('#word').html(scrambledWord);

// prompt the user to guess the original word when given the scrambled word
// alert("Your word to guess is " + scrambledWord + "!");


// If the user guesses wrong, tell them they were wrong and the right word.
// If the user guesses the correct word, congratulate them.

var guesses = 3;

function evaluateGuess(evt){

    var answer = $('#input').val();
    console.log(answer);
    answer = answer.toLowerCase().trim();
    console.log(answer);

    if (answer === "") {
        $('#invalid').html("You didn't enter a word!");
        // TODO remove this message when click into textbox
        $('#input').focus(function (){
            $('#invalid').html("");
        });
    } 

    if (answer === randomWord) {
        $('#display').html('<p>Congratulations! You guessed the word!</p><a href="scramble.html"><button type="button" id="play-again">Gimme another one!</button></a>');
    } else {
        if (guesses > 1) {
            guesses -= 1;
            $('#prompt').html("Not quite! You have " + guesses + " guesses left. Guess again.");
        } else if (guesses == 1) {
            $('#prompt').html("Sorry, you are out of guesses. This was the word:");
            $('#word').html(randomWord);
            $('#get-input').html("<a href='scramble.html'><button type='button' id='play-again'>Gimme another one!</button></a>");
        }
    }
}


// $('#submit').on('submit', evaluateGuess);

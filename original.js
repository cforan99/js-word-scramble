
        var WORDS     = ["booger", "apple", "hackbright", "mango", "lentil", "popcorn", "python", "library", "magazine", "street"];
        var SCRAMBLED = ["oogreb", "papel", "backrhight", "goman", "teilln", "copornp", "yphtno", "yrlirba", "zamagien", "treste"];

        var playing = true;

        while (playing) {

            // Grab a random word from the WORDS array
            var randomNum = Math.floor(Math.random() * 10);
            var randomWord = WORDS[randomNum];
            console.log(randomNum);
            console.log(randomWord);

            // Grab the corresponding scrambled word from the SCRAMBLED array
            var scrambledWord = SCRAMBLED[randomNum];
            console.log(scrambledWord);

            // prompt the user to guess the original word when given the scrambled word
            // alert("Your word to guess is " + scrambledWord + "!");
            var answer = prompt("Unscramble the word " + scrambledWord + "!");
            console.log(answer);

            // If the user guesses wrong, tell them they were wrong and the right word.
            // If the user guesses the correct word, congratulate them.

            if (answer === randomWord) {
                alert("Congratulations! You guessed the word!");
            } else {
                alert("Not quite. The word was " + randomWord + ".");
            }

            playing = confirm("Press OK To keep playing or Cancel to quit");

            // What does confirm() return?
            // What does setting the playing variable do?
        }

        alert("goodbye!");
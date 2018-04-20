<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <title>Psychic Game</title>
</head>

<body>
    <h1>
        <strong> The Psychic Game</strong>
    </h1>
    <div id="game">
        <p>Guess what letter im thinking of:</p>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        // Array of options (Alphabet).
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // variables for wins, losses, guesses left, your guess so far
        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var guessesSoFar = 0;

        // function start when user presses a key
        document.onkeyup = function(event) {

            // which key user pressed
            var userGuess = event.key;

            // computers random guess
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            // logic for wins, losses, guesses left & words guesses so far
            if (userGuess === computerChoices) {

                if (userGuess === computerGuess) {
                    wins++;
                } else if (userGuess !== computerGuess) {
                    lossess++;
                }

                var html =
                  "<p>wins: " + wins + "</p>" +
                  "<p>losses: " + losses + "</p>";

                //inner html contents #game
                document.querySelector("#game").innerHTML = html;
            }
        };


    </script>

</body>

</html>
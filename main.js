// the theme for this game is to be words from "Mystery Science Theater 3000"

// Linking to required files
var Letters = require("letter.js");
var Game = require("game.js");
var Word = require("word.js");

// requiring npms
var inquirer = require("inquirer");

// picking the word to guess, and setting the starting state of the game.
var hangMan = {
    words: Game.newWords.wordArray,
    remainingGuesses: 10,
    // empty array to store the letters already guessed
    lettersGuessed: [],
    gameStart: function () {
        if (this.lettersGuessed.length > 0) {
            this.lettersGuessed = [];
        }
        inquirer.prompt([{
            name: play,
            type: "confirm",
            message: "The Mads are calling, answer?"
        }]).then(function (answer) {
            if (answer.play) {
                that.newGame();
            } else {
                console.log("Failure to respond will result in DEEP HURTING");
            }
        })
    },


}
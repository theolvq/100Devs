// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'How are you?'
if (sentence.includes('?')) {
	alert(sentence)
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let string = 'I am a jr. dev'
string.replace('jr. dev', 'software engineer')
console.log(string)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rps = () => {
	let botChoice
	let random = Math.random()
	if (random < 0.3333) {
		botChoice = 'rock'
	} else if (random > 0.6667) {
		botChoice = 'paper'
	} else {
		botChoice = 'scissors'
	}
	return botChoice
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

const playRound = () => {
    let 
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

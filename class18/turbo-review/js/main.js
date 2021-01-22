// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = 'beer'
console.log(drink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let saying = 'the apple never falls far from the tree'
console.log(saying.includes('apple'))
console.log(saying.search('never'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rockPaperScissors = () => {
	let random = Math.random()
	return random < 0.33 ? 'rock' : random > 0.66 ? 'scissors' : 'paper'
	// if (random <= 0.33) {
	// 	return 'rock';
	// } else if (random > 0.33 && random <= 0.66) {
	// 	return 'paper';
	// } else {
	// 	return 'scissors';
	// }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const playRPS = choice => {
	let botChoice = rockPaperScissors()
	switch (choice) {
		case botChoice:
			return 'Draw'
		case 'rock':
			switch (botChoice) {
				case 'scissors':
					return 'You Win'
				case 'paper':
					return 'you lose'
			}
			break
		case 'paper':
			switch (botChoice) {
				case 'rock':
					return 'You win'
				case 'scissors':
					return 'you lose'
			}
			break
		case 'scissors':
			switch (botChoice) {
				case 'rock':
					return 'you lose'
				case 'paper':
					return 'you win'
			}
			break
	}
	// if (choice === 'rock' && rockPaperScissors() === 'paper') {
	// 	return 'You lose!';
	// } else if (choice === 'rock' && rockPaperScissors() === 'scissors') {
	// 	return 'You Win!';
	// } else if (choice === 'rock' && rockPaperScissors() === 'rock') {
	// 	return 'Draw!';
	// } else if (choice === 'paper' && rockPaperScissors() === 'scissors') {
	// 	return 'You Win!';
	// } else if (choice === 'paper' && rockPaperScissors() === 'rock') {
	// 	return 'You Lose!';
	// } else if (choice === 'paper' && rockPaperScissors() === 'paper') {
	// 	return 'Draw!';
	// } else if (choice === 'scissors' && rockPaperScissors() === 'rock') {
	// 	return 'You lose!';
	// } else if (choice === 'scissors' && rockPaperScissors() === 'paper') {
	// 	return 'You win!';
	// } else if (choice === 'scissors' && rockPaperScissors() === 'scissors') {
	// 	return 'Draw!';
	// }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const loopyRPS = array => {
	for (let i = 0; i < array.length; i++) {
		playRPS(array[i])
	}
}

loopyRPS(['rock', 'rock', 'rock'])

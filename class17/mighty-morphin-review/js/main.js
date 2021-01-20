// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'christmas';
holiday = 'LABOUR DAY';
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'Hello, World!';
// alert(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const fiveNums = (n1, n2, n3, n4, n5) =>
	alert(Math.abs(100 - n1 - n2 - n3 - n4 - n5));
fiveNums(120, 45, 50, 2, 4);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const threeNums = (n1, n2, n3) => {
	`The highest number is ${Math.max(n1, n2, n3)} and the lowest is ${Math.min(
		n1,
		n2,
		n3
	)}`;
};
threeNums(30, 20, 50);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const headsOrTails = array => {
	return array[Math.floor(Math.random() * Math.floor(array.length))];
};
headsOrTails(['heads', 'tails']);

const hOrT = () => (Math.random() < 0.5 ? 'heads' : 'tails');
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
const loop = n => {
	for (let i = 0; i < n; i++) {
		console.log(headsOrTails(['heads', 'tails']));
	}
};
loop(10);

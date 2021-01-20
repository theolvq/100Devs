//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ['Friends', 'HIMYM', 'Lupin', 'The Witcher', 'GoT'];
tvShows.forEach((x, i) => console.log(x, i));
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(x => x % 2 === 0);
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const sumMinMax = array => alert(Math.min(...array) + Math.max(...array));

const secondLowAndHigh = array => {
	let sorted = array.sort((a, b) => a - b);
	alert(sorted[1] + sorted[sorted.length - 2]);
};

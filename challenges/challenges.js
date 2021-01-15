// Day 01: create a function that takes in a number and a string. If the length of the string multiplied by the number is greater than 100, alert 'Winner'
const winner = (str, num) =>
	str.length * num > 100 ? alert('Winner!') : undefined;

// Day 02: create a function that takes in an array and console.log() the sum of the first value and the last value
const sumFirstLast = array => console.log(array[0] + array[array.length - 1]);

// Day 03: create a function that takes in a person's name and add the name to a names' list, let them know their position on the list. The list should be created outside of the function
const userNames = ['Jack', 'John', 'Brad'];
const addName = firstName => {
	userNames.push(firstName);
	return `You are number ${userNames.indexOf(firstName) + 1} on the list`;
};

//Day 04: create a function that takes in an array of numbers and returns a new array containing only odd numbers.
const oddOnly = array => array.filter(x => x % 2 !== 0);

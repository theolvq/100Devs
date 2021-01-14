// Day 01: create a function that takes in a number and a string. If the length of the string multiplied by the number is greater than 100, alert 'Winner'
const winner = (str, num) =>
	str.length * num > 100 ? alert('Winner!') : undefined;

// Day 02: create a function that takes in an array and console.log() the sum of the first value and the last value
const sumFirstLast = array => console.log(array[0] + array[array.length - 1]);

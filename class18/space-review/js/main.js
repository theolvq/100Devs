//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [10, 20, 30, 50, 60, 110]
const sum = numbers.reduce((a, b) => a + b, 0)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squareNums = array => array.map(x => Math.pow(x, 2))
//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = string => string.split('').reverse().join('')
//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindrome = string =>
	string.split('').reverse().join('') === string
		? 'palindrome'
		: 'not a palindrome'

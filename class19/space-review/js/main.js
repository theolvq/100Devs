//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const array = [2, 7, 252, 23, 56]
array.reduce((a, b) => a + b)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squared = array => array.map(x => x ** 2)

//Create a function that takes string
//Print the reverse of that string to the console
const reverse = str => str.split('').reverse().join('')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindrome = str => str === reverse(str)

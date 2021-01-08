//--- Easy
//create a variable and assign it a boolean
let isCool = true;
//create a variable and assign it a string that is a number
let numberString = '4';
//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
numberString = parseInt(numberString) + 10;
//print that number to the console
console.log(numberString);
//--- Medium
//create a variable that holds a value from the input

document.querySelector('#button').addEventListener('click', () => {
	let inputValue = document.querySelector('#field').value;
	//add 21 to that number
	inputValue = Number(inputValue) + 21;
	//alert that number
	alert(inputValue);
});
//--- Hard
//create a variable that holds the h1
// let h1 = document.querySelector('h1');
// //add an event listener to that element that places the product of the two previous variables in the DOM
// let h2 = document.querySelector('h2');
// h1.addEventListener('click', () => {
// 	h2.textContent = inputValue * numberString;
// });

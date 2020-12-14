// *Variables*
// Create a variable and console log the value
let num = 5;
console.log(num);
// Create a variable, add 10 to it, and alert the value
let num2 = 23;
alert(num2 + 10);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subFour = (n1, n2, n3, n4) => alert(n1 - n2 - n3 - n4);
// Create a function that divides one number by another and returns the remainder
const divTwo = (a, b) => a / b;
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
const addTwoJumanji = (a, b) => {
	let sum = a + b;
	if (sum > 50) {
		alert('Jumanji');
	}
};
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const multThreeZebra = (a, b, c) => {
	let product = a * b * c;
	if (product % 3) {
		alert('ZEBRA');
	}
};

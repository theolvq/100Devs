// *Variables*
// Create a variable and alert log the value
const love = true;
alert(love);
// Create a variable, add -15 to it, and print the value to the console
let ten = 10;
console.log(ten - 15);
// *Functions*
// Create a function that multiplys 4 numbers and alerts the product
const mutl4 = (n1, n2, n3, n4) => alert(n1 * n2 * n3 * n4);
// Create a function that divides one number by another and returns the remainder plus 10
const div = (n1, n2) => (n1 % n2) + 10;
// *Conditionals*
// Create a function that adds three numbers and if the sum is greater than 1000 alert "Block Party"
const add3 = (n1, n2, n3) => {
	let sum = n1 + n2 + n3;
	if (sum > 1000) {
		alert('Block Party');
	}
};
// Create a function that divides five numbers and if the quotient is divisible by 5 alert LINCOLN
const div5 = (n1, n2, n3, n4, n5) => {
	let quotient = n1 / n2 / n3 / n4 / n5;
	if (quotient % 5) alert('Lincoln');
};
//*Loops*
//Create a function that takes in a word and a number. Console log the word x cubed times where x was the number passed in
const weird = (str, num) => {
	for (let i = 0; i < Math.pow(num, 2); i++) {
		console.log(str);
	}
};

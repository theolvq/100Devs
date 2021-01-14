//---Easy
//create a function that adds two numbers and alerts the difference
const addTwo = (n1, n2) => alert(n1 - n2);
//create a function that divides two numbers and console logs the quotient
const divTwo = (n1, n2) => console.log(n1 / n2);
//create a function that multiplys four numbers and returns the product
const multFour = (n1, n2, n3, n4) => n1 * n2 * n3 * n4;
//---Medium
//create a function that takes in four numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the difference of the last two numbers
const fourNum = (n1, n2, n3, n4) => {
	let sum = n1 + n2;
	let dif = n3 - n4;
	return sum % dif;
};
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
const fourNum2 = (n1, n2, n3, n4) => {
	let prod = n1 * n2;
	if (prod > 100) {
		console.log(n3 + n4);
	} else if (prod < 100) {
		console.log(n3 - n4);
	} else if (prod === 100) {
		alert((n1 * n2 * n3) % n4);
	}
};

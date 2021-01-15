// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'spinach';
food = 'bacon';
alert(food);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let greeting = 'Hello';
alert(greeting[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const threeNums = (n1, n2, n3) => {
	alert((n1 / n2) * n3);
};
threeNums(5, 6, 10);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const oneNum = n1 => Math.cbrt(n1);
oneNum(16);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const cond = month => {
	if (month === 'June' || month === 'July' || month === 'August') {
		alert('YAY');
	} else {
		alert('BOOO');
	}
};
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const loopOneNum = n1 => {
	for (let i = 1; i <= n1; i++) {
		if (i % 5 !== 0) {
			console.log(i);
		}
	}
};

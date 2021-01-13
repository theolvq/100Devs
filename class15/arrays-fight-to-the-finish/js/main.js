//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = [
	'the fellowship of the ring',
	'the two towers',
	'the return of the king',
];

movies.forEach(x => (document.querySelector('h2').innerText += x));

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
numbers = numbers.map(x => x + 3);
console.log(numbers);

//Find the average of all the numbers from question three
// numbers.map((a, b) => (a + b) / numbers.length);

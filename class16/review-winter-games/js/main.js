//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
const evenNums = array => array.filter(x => x % 2 === 0);

const evenArr = array => {
	let newArray = [];
	array.forEach(element => {
		if (element % 2 === 0) {
			newArray.push(element);
		}
	});
	return newArray;
};

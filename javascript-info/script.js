// Create an empty object user.
let user = {}
// Add the property name with the value John.
user.name = 'Lily'
// Add the property surname with the value Smith.
user.surname = 'Pad'
// Change the value of the name to Pete.
user.name = 'Kristina'
// Remove the property name from the object.
delete user.name

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
const isEmpty = obj => {
	for (let key in obj) {
		return false
	}
	return true
}

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
	managers: {
		Bjorn: 200,
		Seb: 300,
	},
}

const sumSalaries = obj => {
	let sum = 0
	for (let key in obj) {
		sum += obj[key]
		console.log(obj[key])
	}
	return sum
}

sumSalaries(salaries)

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.
let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
}
const multiplyNumeric = obj => {
	for (let key in obj) {
		if (typeof obj[key] === 'number') obj[key] *= 2
	}
}

let calculator = {
	firstOperand: undefined,
	secondOperand: undefined,
	read() {
		this.firstOperand = parseFloat(prompt('Please give one value'))
		this.secondOperand = parseFloat(prompt('Please give a second value'))
	},

	sum() {
		return this.firstOperand + this.secondOperand
	},

	mul() {
		return this.firstOperand * this.secondOperand
	},
}

let ladder = {
	step: 0,
	up() {
		this.step++
		return this
	},
	down() {
		this.step--
		return this
	},
	showStep() {
		alert(this.step)
		return this
	},
}

//Write your pseduo code first!
// take input in either F or C
// convert it to the other unit
// display the result somewhere

const tempF = document.querySelector('#tempF').value;
const tempC = document.querySelector('#tempC').value;
const convertFtoC = document.querySelector('#convertFtoC');
const convertCtoF = document.querySelector('#convertCtoF');
const resultPlace = document.querySelector('#result');
let result;

const convertToCelsius = () => {
	result = (tempF - 32) * (5 / 9);
	resultPlace.innerText = result;
};

const convertToFarenheit = () => {
	result = tempC * (9 / 5) + 32;
	resultPlace.innerText = result;
};

convertFtoC.addEventListener('click', convertToCelsius);

convertCtoF.addEventListener('click', convertToFarenheit);

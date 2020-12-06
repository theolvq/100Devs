const yell = document.querySelector('#yell');
const result = document.querySelector('#placeToYell');

const YELL = () => {
	const firstName = document.querySelector('#firstName').value.toUpperCase();
	const firstMiddle = document
		.querySelector('#firstMiddle')
		.value.toUpperCase();
	const lastMiddle = document
		.querySelector('#lastMiddle')
		.value.toUpperCase();
	const lastName = document.querySelector('#lastName').value.toUpperCase();
	result.innerText = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`;
};

yell.addEventListener('click', YELL);

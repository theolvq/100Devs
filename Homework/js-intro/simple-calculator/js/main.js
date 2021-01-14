const result = document.querySelector('#result');
let total = 0;
const btns = document.querySelectorAll('li');

const calculate = e => {
	let operation = e.target.id;
	switch (operation) {
		case 'zero':
			total = 0;
			break;
		case 'plusThree':
			total += 3;
			break;
		case 'plusNine':
			total += 9;
			break;
		case 'minusTwo':
			total -= 2;
			break;
		case 'timesNine':
			total *= 9;
			break;
	}
	result.innerText = total;
};

btns.forEach(li => li.addEventListener('click', calculate));

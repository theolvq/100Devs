const check = document.querySelector('#check');
const result = document.querySelector('#placeToSee');

const dayTeller = () => {
	const day = document.querySelector('#day').value.toLowerCase();
	switch (day) {
		case 'tuesday':
		case 'thursday':
			result.innerText = "It's class day!";
			break;
		case 'saturday':
		case 'sunday':
			result.innerText = "It's the week-end!";
			break;
		default:
			result.innerText = 'Just another work day!';
			break;
	}
};

check.addEventListener('click', dayTeller);

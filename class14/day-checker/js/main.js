//Create a conditonal that checks the day
//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study

let check = document.querySelector('h1');
let p = document.querySelector('p');

const checkIt = () => {
	const day = document.querySelector('#whatDay').value.toLowerCase();
	const house = document.querySelector('#whatHouse').value.toLowerCase();
	if (day === 'tuesday' || day === 'thursday') {
		p.innerText = 'You have Class';
	} else if (day === 'saturday') {
		p.innerText = 'Office Hours today';
	} else if (day === 'friday' && house === 'turing') {
		p.innerText = 'You got private office hours today';
	} else if (day === 'wednesday' && house === 'hopper') {
		p.innerText = 'You got private office hours today';
	} else if (day === 'monday' && house === 'hamilton') {
		p.innerText = 'Book a one on one!';
	} else {
		p.innerText = 'Study Time!';
	}
};

check.addEventListener('click', checkIt);
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

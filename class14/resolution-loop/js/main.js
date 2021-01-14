//Create a function that has a loop that prints your resolution 365 times to the console and then call that function
const h2 = document.querySelector('h2');

const button = document.querySelector('#yo');

const loop = () => {
	const resolution = document.querySelector('#resolution').value;
	for (let i = 0; i < 365; i++) {
		h2.innerText += ` ${resolution} `;
	}
};
button.addEventListener('click', loop);
//Bonus can you make it print your resolution 365 times to the DOM?

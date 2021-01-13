const checkBtn = document.querySelector('#check');

const check = () => {};

checkBtn.addEventListener('click', check);
const date = document.querySelector('#date').value;

console.log(date);

fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${day}`, {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '0f7c31d15cmsh7911e53edc8f915p17192bjsnc134ba3650ae',
		'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
	},
})
	.then(response => {
		console.log(response);
		response.json();
	})
	.then(data => {})
	.catch(err => {
		console.error(err);
	});

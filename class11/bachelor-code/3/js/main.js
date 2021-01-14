const contestants = document.querySelectorAll('.contestant');

contestants.forEach(element => element.addEventListener('click', checkForRose));

function checkForRose(click) {
	if (click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden');
	} else {
		alert('Wrong!');
	}
}

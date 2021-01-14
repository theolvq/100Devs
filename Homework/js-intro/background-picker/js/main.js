const body = document.querySelector('body');
const buttons = document.querySelectorAll('li');
buttons.forEach(li =>
	li.addEventListener('click', () => {
		body.style.color = 'white';
		body.style.background = `${li.id}`;
	})
);

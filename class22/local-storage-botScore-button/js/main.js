//Create a button that adds 1 to a botScore stored in localStorage

if (!localStorage.setItem('botScore', 0)) {
	localStorage.setItem('botScore', 0)
}

const button = document.querySelector('button')
button.addEventListener('click', increment)
const increment = () => {
	let botScore = Number(localStorage.getItem('botScore'))
	botScore = botScore + 1
	localStorage.setItem('botScore', botScore)
}

//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const img = document.querySelector('img')
const date = document.querySelector('input').value
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
	fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			img.src = data.url
		})
		.catch(err => console.log(`error ${err}`))
})

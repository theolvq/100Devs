//Get a dog photo from the dog.ceo api and place the photo in the DOM
const url = 'https://dog.ceo/api/breeds/image/random'
const img = document.querySelector('img')

fetch(url)
	.then(res => res.json())
	.then(data => {
		console.log(data)
		img.src = data.message
	})
	.catch(err => console.log(err))

//Get Deck
let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
	.then(res => res.json())
	.then(data => {
		console.log(data)
		deckId = data.deck_id
	})
	.catch(err => console.log(err))

const getCards = () => {
	const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

	fetch(url)
		.then(res => res.json()) // parse response as JSON
		.then(data => {
			console.log(data)
			let val1 = Number(cardValue(data.cards[0].value))
			let val2 = Number(cardValue(data.cards[1].value))
			document.querySelector('#player1').src = data.cards[0].image
			document.querySelector('#player2').src = data.cards[1].image
			const winner = document.querySelector('#winner')
			// switch ((val1, val2)) {
			// 	case val1 > val2:
			// 		winner.innerText = 'Player 1 Won'
			// 		break
			// 	case val1 < val2:
			// 		winner.innerText = 'Player 2 Won'
			// 		break
			// 	default:
			// 		winner.innerText = 'WAR'
			// }
			if (val1 > val2) {
				winner.innerText = 'Player 1 Won'
			} else if (val1 < val2) {
				winner.innerText = 'Player 2 Won'
			} else {
				winner.innerText = "It's a tie"
			}
		})
		.catch(err => {
			console.log(`error ${err}`)
		})
}

document.querySelector('button').addEventListener('click', getCards)

const cardValue = val => {
	console.log(val)
	switch (val) {
		case 'ACE':
			return 14
		case 'KING':
			return 13
		case 'QUEEN':
			return 12
		case 'JACK':
			return 11
		default:
			return val
	}
}

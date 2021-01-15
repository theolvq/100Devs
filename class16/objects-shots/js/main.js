//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const btn = document.querySelector('button');
const img = document.querySelector('img');
const cocktail = document.querySelector('h2');
const instructions = document.querySelector('h3');
const ingredients = document.querySelector('h4');

btn.addEventListener('click', () => {
	const drink = document.querySelector('input').value;
	const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
	fetch(url)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			cocktail.innerText = data.drinks[0].strDrink;
			img.src = data.drinks[0].strDrinkThumb;
			instructions.innerText = data.drinks[0].strInstructions;
			ingredients.innerHTML = `<ul>
            <li>${data.drinks[0].strIngredient1}</li>
            <li>${data.drinks[0].strIngredient2}</li>
            <li>${data.drinks[0].strIngredient3}</li>
            <li>${data.drinks[0].strIngredient4}</li>
        </ul>`;
		})
		.catch(err => {
			console.log(`error ${err}`);
		});
});

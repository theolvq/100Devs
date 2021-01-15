const checkBtn = document.querySelector('#check');

const user = {
	birthDate: undefined,
	birthMonth: undefined,
	birthDay: undefined,
	sign: undefined,
	horoDay: undefined,
};

const getBirthDate = () => {
	user.birthDate = new Date(document.querySelector('#date').value);
	user.birthMonth = user.birthDate.getMonth();
	user.birthDay = user.birthDate.getDate();
};

const getSign = () => {
	if (
		(user.birthMonth === 0 && user.birthDay >= 20) ||
		(user.birthMonth === 1 && user.birthDay <= 18)
	) {
		user.sign = 'aquarius';
	} else if (
		(user.birthMonth === 1 && user.birthDay >= 19) ||
		(user.birthMonth === 2 && user.birthDay <= 20)
	) {
		user.sign = 'pisces';
	} else if (
		(user.birthMonth === 2 && user.birthDay >= 21) ||
		(user.birthMonth === 3 && user.birthDay <= 19)
	) {
		user.sign = 'aries';
	} else if (
		(user.birthMonth === 3 && user.birthDay >= 20) ||
		(user.birthMonth === 4 && user.birthDay <= 20)
	) {
		user.sign = 'taurus';
	} else if (
		(user.birthMonth === 4 && user.birthDay >= 21) ||
		(user.birthMonth === 5 && user.birthDay <= 20)
	) {
		user.sign = 'gemini';
	} else if (
		(user.birthMonth === 5 && user.birthDay >= 21) ||
		(user.birthMonth === 6 && user.birthDay <= 22)
	) {
		user.sign = 'cancer';
	} else if (
		(user.birthMonth === 6 && user.birthDay >= 23) ||
		(user.birthMonth === 7 && user.birthDay <= 22)
	) {
		user.sign = 'leo';
	} else if (
		(user.birthMonth === 7 && user.birthDay >= 23) ||
		(user.birthMonth === 8 && user.birthDay <= 22)
	) {
		user.sign = 'virgo';
	} else if (
		(user.birthMonth === 8 && user.birthDay >= 23) ||
		(user.birthMonth === 9 && user.birthDay <= 22)
	) {
		user.sign = 'libra';
	} else if (
		(user.birthMonth === 9 && user.birthDay >= 23) ||
		(user.birthMonth === 10 && user.birthDay <= 21)
	) {
		user.sign = 'scorpio';
	} else if (
		(user.birthMonth === 10 && user.birthDay >= 22) ||
		(user.birthMonth === 11 && user.birthDay <= 21)
	) {
		user.sign = 'sagittarius';
	} else if (
		(user.birthMonth === 11 && user.birthDay >= 22) ||
		(user.birthMonth === 0 && user.birthDay <= 19)
	) {
		user.sign = 'capricorn';
	}
};

const getDay = () => {
	user.horoDay = document.querySelector('input[type="radio"]:checked').value;
	console.log(user.horoDay);
};

const today = new Date(Date.now());

const result = document.querySelector('.result');

const getHoroscope = () => {
	fetch(
		`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${user.sign}&day=${user.horoDay}`,
		{
			method: 'POST',
			headers: {
				'x-rapidapi-key':
					'0f7c31d15cmsh7911e53edc8f915p17192bjsnc134ba3650ae',
				'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
			},
		}
	)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			result.innerHTML = `<section class='horoscope'>
			<h2>Your Horoscope</h2>
			<p>${data.description}</p>
			<h3>Color of the day</h3>
			<p>${data.color}</p>
			<h3>Compatible sign</h3>
			<p>${data.compatibility}</p>
			<h3>Your lucky Number</h3>
			<p>${data.lucky_number}</p>
			<h3>Your lucky time</h3>
			<p>${data.lucky_time}</p>
			<h3>Your mood of the day</h3>
			<p>${data.mood}</p>
			</section>`;
		})
		.catch(err => {
			console.error(err);
		});
};

checkBtn.addEventListener('click', () => {
	getBirthDate();
	getSign();
	getDay();
	getHoroscope();
});

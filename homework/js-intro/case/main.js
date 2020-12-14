const btn = document.querySelector('#get-string');

const convert = () => {
	const string = document.querySelector('#string').value;
	if (string === string.toUpperCase()) {
		result.innerText = string.toLowerCase();
	} else if (string === string.toLowerCase()) {
		result.innerText = string.toUpperCase();
	} else {
		const strArr = [];
		string.split('').map(l => {
			if (l === l.toUpperCase()) {
				strArr.push(l.toLowerCase());
			} else if (l === l.toLowerCase()) {
				strArr.push(l.toUpperCase());
			}
		});
		result.innerText = strArr.join('');
	}
};

btn.addEventListener('click', convert);

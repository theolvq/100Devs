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

const encode = string => {
	let result = [];
	string.split('').map(l => {
		switch (l) {
			case 'a':
				l = 1;
				result.push(l);
				break;
			case 'e':
				l = 2;
				result.push(l);
				break;
			case 'i':
				l = 3;
				result.push(l);
				break;
			case 'o':
				l = 4;
				result.push(l);
				break;
			case 'u':
				l = 5;
				result.push(l);
				break;
			default:
				l = l;
				result.push(l);
		}
	});
	return result.join('');
};

const decode = string => {
	let result = [];
	string.split('').map(l => {
		switch (l) {
			case '1':
				l = 'a';
				result.push(l);
				break;
			case '2':
				l = 'e';
				result.push(l);
				break;
			case '3':
				l = 'i';
				result.push(l);
				break;
			case '4':
				l = 'o';
				result.push(l);
				break;
			case '5':
				l = 'u';
				result.push(l);
				break;
			default:
				l = l;
				result.push(l);
		}
	});
	return result.join('');
};

document.querySelector('#check').addEventListener('click', check);

function check() {
	const day = document.querySelector('#day').value.toLowerCase();

	//Conditionals go here
	if (day === 'tuesday' || 'thursday') {
		alert('class day');
	} else if (day === 'saturday' || day === 'sunday') {
		alert('weekend');
	} else {
		alert('boring');
	}
}

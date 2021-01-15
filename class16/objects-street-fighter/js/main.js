//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function CreateCharacter(name, kick, fist, origin) {
	this.name = name;
	this.kick = kick;
	this.fist = fist;
	this.origin = origin;
	this.specialMove = function () {
		console.log('Special Move!');
	};
	this.ultimateMove = function () {
		console.log('Ultimate Move!');
	};
	this.warCry = () => {
		console.log('Way Cry');
	};
}

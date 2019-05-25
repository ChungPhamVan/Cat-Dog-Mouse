var Dog = require('./Dog.js');

function Cat(name, age) {
	this.name = name;
	this.age = age;
	this.stomach = [];
}
Cat.prototype.eat = function(animal) {
	if(animal instanceof Dog) {
		this.stomach.push(animal);
	}else {
		throw new ('Cat only eat Dog!');
	}
};
module.exports = Cat;
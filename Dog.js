var chalk = require('chalk');

function Dog(name, age) {
	this.name = name;
	this.age =age;
	this.stomach = [];
}
Dog.prototype.sayHi = function() {
	console.log('Hi, I am ' + chalk.underline.bgBlue(this.name));
};
Dog.prototype.eat = function(Cat) {
	this.stomach.push(Cat);
	return this;
};
module.exports = Dog;
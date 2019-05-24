var chalk = require('chalk');

function Dog(name, age) {
	this.name = name;
	this.age =age;
}
Dog.prototype.sayHi = function() {
	console.log('Hi, I am ' + chalk.underline.bgBlue(this.name));
};
module.exports = Dog;
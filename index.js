var Dog = require('./Dog');
var Cat = require('./Cat');
var Horse = require('./Horse.js');

var Micky = new Dog('Micky', 2);
var Tom = new Cat('Tom', 1.5);
var Huhu = new Horse();
try{
	Tom.eat(Huhu);
}catch {
	console.log('Error: Tom only eat Micky');
}
console.log(Tom.eat(Micky));


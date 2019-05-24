var Dog = require('./Dog');
var Cat = require('./Cat');

var Micky = new Dog('Micky', 2);
var Tom = new Cat('Tom', 1.5);

console.log('Hello World');
console.log(Micky.eat(Tom));
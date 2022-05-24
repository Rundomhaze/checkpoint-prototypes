const Animal = require('./animal');

function Cat(name, age = 1) {
  Animal.call(this, name, age)
}

Object.setPrototypeOf(Cat.prototype, Animal.prototype);

//const murzik = new Cat('Мурзик')

Cat.prototype.say = function () {
  return `мяу!`;
};



module.exports = Cat;

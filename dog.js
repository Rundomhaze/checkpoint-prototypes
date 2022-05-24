const Animal = require('./animal');


function Dog(name, age = 2) {
  Animal.call(this, name, age)
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);


//const zuchka = new Dog('Жучка')

Dog.prototype.say = function () {
   return 'гав!';
  };



module.exports = Dog;

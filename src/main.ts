import './style.css'


// *LINK - 1 - [[Prototype]] =======================================================


// let animal = {
//   eats: true
// }as any
// let rabbit = {
//   jumps: true
// }as any



// rabbit.__proto__ = animal; // (*)

// теперь мы можем найти оба свойства в rabbit:
// console.log( "rabbit.eats = "+rabbit.eats ); // true (**)
// console.log( "rabbit.eats = "+rabbit.jumps ); // true


// *LINK - 2 - F.prototype =======================================================


// let animal = {
//   eats: true
// };

// const Rabbit = (function(this:any,name:string ) {
//   this.name = name;
// }) as any

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log( rabbit.eats ); // true
// console.log( rabbit.name ); // White Rabbit

// '''''''''''''''''''''''''''''''''''''

// function Rabbit() {}
//  по умолчанию:
//  Rabbit.prototype = { constructor: Rabbit }


// alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)

// '''''''''''''''''''''''''''''''''''''

// function Rabbit(name) {
//   this.name = name;
//   alert(name);
// }

// let rabbit = new Rabbit("White Rabbit");

// let rabbit2 = new rabbit.constructor("Black Rabbit");


// let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}



// *LINK - 2 - F.prototype =======================================================


// ?############# Описание объектов, методов JSDoc ##############
// https://jsdoc.app/index.html

/**
 * @method
 * Тут можем создать описание функции
 *
 * @param {string} this - так описываются параметры. Т.к. это метод, опишем только this, который передавать не нужно
 */
String.prototype.reverse = function (this: string) {
  return this.split('').reverse().join('')
}
console.log('sffgdfgdfg'.reverse())

/**
 * Объект с числом и методом
 */

const myObj = {
  /**
   * @argument
   * Просто число
   */
  a:10,
  /**
   * @method
   * Увеличивает a на 1
   */
  count() {
    this.a++
  }
}

myObj.count()
myObj.a
console.log(myObj)


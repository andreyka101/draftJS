import './style.css'


// *LINK - 1 - [[Prototype]] =======================================================


// let animal = {
//   eats: true
// }as any
// let rabbit = {
//   jumps: true
// }as any



// rabbit.__proto__ = animal; // (*)

// // теперь мы можем найти оба свойства в rabbit:
// console.log( "rabbit.eats = "+rabbit.eats ); // true (**)
// console.log( "rabbit.eats = "+rabbit.jumps ); // true


// *LINK - 2 - F.prototype =======================================================

//STUB - ошибка хз какая

let animal = {
  eats: true
};

const Rabbit = (function(this:any,name:string ) {
  this.name = name;
}) as any

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log( rabbit.eats ); // true
console.log( rabbit.name ); // White Rabbit

// '''''''''''''''''''''''''''''''''''''

// function Rabbit() {}
//  по умолчанию:
//  Rabbit.prototype = { constructor: Rabbit }

// let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}

// alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)

// '''''''''''''''''''''''''''''''''''''

// function Rabbit(name) {
//   this.name = name;
//   alert(name);
// }

// let rabbit = new Rabbit("White Rabbit");

// let rabbit2 = new rabbit.constructor("Black Rabbit");


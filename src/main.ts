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


let animal = {
  eats: true
};

function Rabbit(name:string ) {
  return this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
import './style.css'


// *LINK - 1 - [[Prototype]] =======================================================


let animal = {
  eats: true
}as any
let rabbit = {
  jumps: true
}as any



rabbit.__proto__ = animal; // (*)

// теперь мы можем найти оба свойства в rabbit:
console.log( "rabbit.eats = "+rabbit.eats ); // true (**)
console.log( "rabbit.eats = "+rabbit.jumps ); // true
console.log( "я изменил rabbit.eats = "+rabbit.jumps ); // true


// *LINK - 2 - [[Prototype]] =======================================================



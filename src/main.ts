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

declare global {
  interface String {
    /**
     * @method sss
     * Тут можем создать описание функции
     *
     * @param {string} lang? - так описываются параметры. Т.к. это метод, опишем только this, который передавать не нужно
     */
    sss(lang?:string):string
  }
  interface Number {
    /**
     * @method n
     * умножает на 2
     *
     * @param {number} l2? - или умножает на заданное число не обязательно
     */
    n(l2?:number):number
  }
}

String.prototype.sss = function(this:string,lang:string='') {
  return this+"sss"+lang;
};
let tt = "ttege"
console.log(tt.sss())
console.log(tt.sss('jikdfghjk'))



Number.prototype.n = function(this:number,l2:number=2) {
  return this*l2;
};

let u=56
console.log(u.n(4))


// Дата и время
// 1
// let d = new Date(2012,2,20,3,12)
// console.log(d)

// 2
// let d = new Date(2014, 0, 3)
// function getWeekDay (n:any){
  //   let daysArrey=["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
  //   return daysArrey[n.getDay()]
  // }
  // let daysArrey=["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
  // console.log(getWeekDay(d))
  
  // 4
  // let d = new Date(2015, 0, 2)
  // function getDateAgo(n:any,num:number){ 
    //   let datt=n.getDate()
    //   n.setDate(datt+num)
    //   return n
    // }
    //   console.log(getDateAgo(d,365))
    
    // 5
    // function getLastDayOfMonth(year:number,date:number){
      //   let i = 5
      //   let d = new Date(year, date, i)
      //   let r =0
      //   while (d.getDate() != 1){
        //     r = d.getDate()+1
        //     d.setDate(d.getDate()+1)
        //   }
        //   return r-1
        // }
        // console.log(getLastDayOfMonth(2023,8))
        
        // 8
        let d = new Date()
        function formatDate(n:any){
          let d = new Date()
          let s = n.getSeconds()
          let m = n.getMinutes()
          let h = n.getHours()
          if (s==d.getSeconds() && m==d.getMinutes() && h==d.getHours() && n.getDate()==d.getDate()){
    return "прямо сейчас"
  }
  if (s<d.getSeconds() && m==d.getMinutes() && h==d.getHours() && n.getDate()==d.getDate()){
    return `${d.getSeconds()-s} сек. назад`
  }
  if (m<d.getMinutes() && h==d.getHours() && n.getDate()==d.getDate()){
    return `${d.getMinutes()-m} мин. назад`
  }
  if (h<d.getHours() && n.getDate()==d.getDate()){
    return `${d.getHours()-h} ч. назад`
  }
  else{
    if (n.getDate()<10 && n.getMonth()<10){
      return `выл в 0${n.getDate()}.0${n.getMonth()}.${n.getFullYear()}  ${h}:${m}`
    }
    if (n.getDate()<10 && n.getMonth()>=10){
      return `выл в 0${n.getDate()}.${n.getMonth()}.${n.getFullYear()}  ${h}:${m}`
    }
    if (n.getDate()>=10 && n.getMonth()<10){
      return `выл в 0${n.getDate()}.0${n.getMonth()}.${n.getFullYear()}  ${h}:${m}`
    }
    else{
      return `выл в 0${n.getDate()}.0${n.getMonth()}.${n.getFullYear()}  ${h}:${m}`
    }
    
  }
}

// console.log(d)
// @ts-ignore
// console.log(formatDate(new Date(d-61000*60*24*5)))
// @ts-ignore
// console.log(new Date(d-61000*60*24*5))
// @ts-ignore
// console.log(formatDate(new Date(d-30 * 1000)))
// @ts-ignore
// console.log(formatDate(new Date(d-5 * 60 * 1000)))

// *LINK - Создайте список =======================================================

// Напишите интерфейс для создания списка.
// Для каждого пункта:
// 1 Запрашивайте содержимое пункта у пользователя с помощью prompt.
// 2 Создавайте элемент <li> и добавляйте его к <ul>.
// 3 Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги, они должны обрабатываться как текст.

let LiArrey = [] as any


// *LINK - Создайте список =======================================================







//=================================================================

// let LiArrey = [] as any
// let t  ={
//    weet(){
//     console.log("88888")
//    }
//   }
// LiArrey.__proto__ = t
// // console.log(prompt())
// LiArrey.weet



// https://learn.javascript.ru/module
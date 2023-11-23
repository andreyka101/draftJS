export default class Ssp{
  #a:number
  #b:number
  #c = 5
  constructor(a:number, b:number){
    this.#a = a
    this.#b = b
  }
  sumABC(){
    console.log(this.#a+this.#b+this.#c);
    console.log("ttttttttttttttttttttt");
  }
  get numC(){
    return this.#c
  }
  set numC(l:number){
    this.#c = l
  }
}
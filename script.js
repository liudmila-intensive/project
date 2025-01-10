'use strict';

var leftBorderWidth = 1;
{
    let second = 2;
}
const pi = 3.14;

//console.log(second);

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null; //то, чего не существует
undefined; //какой либо объект уже существует, но значения не имеет
var obj = {};

console.log(4/0); //Infinity
console.log('string'*9); //NaN

let somthing;
console.log(somthing); //undefined

let person ={
    name:"John",
    age:25,
    isMarried:false
};
console.log(person.name);
console.log(person["name"]);

//массив
let arr = ['plum.png','orange.jpg','apple.bmp'];
console.log(arr[2]);

//alert("Hello, World!");

//let answer = confirm("Are you here?");

//let answer = +prompt("Are you here?");

console.log(typeof(answer)); //проверяем тип данных string

console.log(typeof(null));//object

//операторы в js
//конкатенация - сложение строк
console.log(typeof("arr" + " - object"));//string
console.log(+("arr" + " - object"));//NaN

//инкремент и дикремент

let incr = 10,
    decr = 10;
/*incr++;
decr--;
console.log(incr); //11
console.log(decr); //9 */

//префиксная форма возвращает уже измененное значение, а постфиксная - старое
/*console.log(++incr); //11
console.log(--decr); //9 */

console.log(incr++); //10
console.log(decr--); //10

console.log(5%2);//остаток от деления
console.log("2" == 2); //true
console.log("2" === 2); //false

let isChecked = true,
    isClose = false;
console.log(isChecked && isClose); //false
console.log(isChecked || isClose); //true
console.log(isChecked && !isClose); //true

















"use strict"
// _______________________________ Переменные _________________________________
let myStyle = "fun";
myStyle = 2;
console.log(myStyle);

// _______________________________ Константы _________________________________

function test() {
   let mylife = 3;
   console.log(mylife);
}



const profile = {
   name: "wados",
   age: 27,
}

console.log(profile);

profile.age = 18;

console.log(profile);

// _______________________________ Var _________________________________


age = 35;
console.log(age);
var age;


if (true) {
   var name = 50;
}

console.log(name);


// _______________________________ Тип данных _________________________________

let userName = true;
console.log(userName);
console.log(typeof userName);

userName = String(userName);

console.log(userName);
console.log(typeof userName);


let usersName = 145 / 0;
console.log(usersName);




// _______________________________ If _________________________________

let a = 11
let b = 10

if (a == b) {
   console.log("Верно");
} else {
   console.log("Не верно");
}


// Комбинирование

let dom = 4

if (dom > 10) {
   console.log("dom больше 10");
} else if (dom > 5) {
   console.log("dom больше 5");
} else if (dom >1) {
   console.log("dom больше 1");
} else {
   console.log(":-(");
}


let test2 = "Вася";

let test3 = " Оля";

test2 += test3
console.log(test2);



//?
let c = (13 < 2) ? "Вася" : "Оля";
console.log(c);


// Комбинирование

let d = (13 < 2) ? "больше 10" :
         (2 == 3) ? "равно?" :
         ((11 + 12 * 3) > 111) ? "че?" : "совсем запутался"

console.log(d);


// Домашка
let mes = (92 > '11' && 58 < 100) ? 'Истина' : 'Лож!'
console.log(mes);
// будет истина


if (0) {
   console.log('Лож!');
} else if (" ") {
   console.log('Истина!');
}
// будет истина, т.к. "_" пробел = тру


//___________________________________________________________

// for while
let num = 0;
while (num <= 5) {
   console.log(num);
   num++;
}


//do...while пишется наоборот, чтобы хотя бы 1 фалс прописался

let num2 = 0;
do {
   console.log(num2);
   num++;
} while (num < 0);
// num2 не < 0, но все рвно будет 1 итерация


// for
// for (с чего начинаем; условие; шаг) {код}

for (let index = 0; index < 5; index++) {
   console.log(index);
}


// Остановить код

let num3 = 0;
for (; num3 < 5; num3++) {
   console.log(num3);
   if (num3 == 2) break;
}
console.log(`Работа равна ${num3}`);


// Прервать выполнять часть круга

let num4 = 0;
for (; num4 < 5; num4++) {
   if (num4 == 2) continue;
   console.log(num4);
}

// Метки breack или continue с меткой останавливают саму метку

mark: for (let bob = 0; bob < 2; bob++) {
   for (let bob2 = 0; bob2 < 3; bob2++) {
      if (bob2 == 2) {
         continue mark;
      }
      console.log(bob2);
   }
}


let p = 8;
while (p) {
   console.log(p);
   p--;
}
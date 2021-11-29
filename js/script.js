

// //_____________________________Математика___________________________________



//    let x;   

//    // Сложение
//    x = 5 + 8;
//    console.log(`Результат сложения ${x}`);

//    let result = "Дом" + " который" + " построил Джек"
//    console.log(result);

//    let result2 = "Дом " + 22;
//    console.log(result2);
//    console.log(typeof result2);

//    let result3 = 22 + 11 + " Дом";
//    console.log(result3);

//    // + перед строкой переводит строку в число
//    let result5 = + "11";
//    console.log(result5);
//    console.log(typeof result5);

//    // + перез выводом делают их числами и выполняет операцию 25 + -10 = 15 аналог если ставить Number перед user1 и user2
//    let user1 = "25";
//    let user2 = "-10";
//    console.log(+user1 + +user2);




//    // Вычетание
//    x = 7 - 9;
//    console.log(`Результат сложения ${x}`);

//    // любые операторы строки и числа переводят результат в число и выполняют операцию
//    let result4 = "22" - 10;
//    console.log(result4);
//    console.log(typeof result4);




//    // Умножение
//    x = 2 * 16;
//    console.log(`Результат сложения ${x}`);

//    // Деление
//    x = 13 / 2;
//    console.log(`Результат сложения ${x}`);

//    // Взятие остатка от деления %
//    x = 13 % 2;
//    console.log(`Результат сложения ${x}`);

//    // Взятие в степень **
//    x = 13 ** 2;
//    console.log(`Результат сложения ${x}`);






// //_____________________________Присвоения___________________________________





//    // Присвоение = (но лучше так не делать) результат будет a = 4, а не 5

//    let a = 5;
//    let b = 1;

//    let sum = 8 - ( a = b + 3);
//    console.log(a);




//    // Присвоение через =

//    let result1 = result2 = result3 = 1 + 2;
//    console.log(result1);
//    console.log(result2);
//    console.log(result3);




//    // Короткая запись d += 1 + 3

//    let c = 5;
//    c = c + 1 + 3;
//    console.log(c);

//    let d = 5;
//    d += 1 + 3;
//    console.log(d);


// //________________________________________________________________


//    // Инкремент ++ - увеличивает значение на 1

//    let inc = 5;
//    inc++;
//    console.log(inc);

//    // Декремент -- - уменьшает значение на 1

//    let dec = 5;
//    dec--;
//    console.log(dec);

//    // inc++ и ++inc имеют разницу при выводе через console.log(inc)
//    // inc = 0, inc++, результат = 0. Если inc = 0, ++inc, результат 1.

//    let mat = 0;
//    let newmat = 2 * ++mat;
//    console.log(newmat);







// //___________________________Операторы_____________________________________







//    // Операторы сравнения (возвращают true or false)

//    // <, >, <=, >=, == - равно, != - не равно, === строго равно, !== строго не равно.

//    console.log(2 > 1);
//    console.log(2 < 1);
//    console.log(25 == 13);
//    console.log(7 != 11);

//    // Приводит строчный элемент к числовому
//    console.log('51' == 51);

//    // Присвоить переменной

//    let f = 2 > 1;
//    console.log(f);


// //________________________________________________________________

//    // Строгие операторы сравнивают не приводя к числовому
//    // false
//    console.log('51' === 51);

// //________________________________________________________________

//    // Логические операнды 

//    // || - оператор или. Вернет true, или если тру нет тогда false (читает слева на право) (т.е. переменные с данными)

//    console.log(0 || 1);
//    console.log(true || 1);
//    console.log(null || 'fixIt' || 12);
//    console.log(null || '' || 12);

//    // так

//    let name2 = '';
//    let surrname = "возраст";

//    let user = name2 || surrname || "имя пользователя"

//    console.log(user);

//    // или так
//    // если юзер меньше админа, будет юзер +1, иначе будет юзер
//    let user3 = 0;
//    let admin = 5;

//    user3 > admin || user3++;

//    console.log(user3);


//    // && - оператор и, тоже что и || только возращает flase, а если только тру, тогда возращает тру(или последний тру или фалс).

//    console.log('дом' && 0 && 14);
//    console.log('дом' && 11 && 14);

//    // && - больший приоритет чем у ||

//    console.log('дом' && 1 || 0 && 5);
//    // сначала 'дом' && 1, потом 0 && 5, а затем 1 // 0.

//    // Пример

//    let user5 = 1;
//    user5 > 0 && console.log(`Пользователь: ${user5}`);
//    // если user5 = 1, то выводится пользователь: user5, если 0, то ничего не выводится



//    // Оператор ! не - меняет буллевые операторы. Наивысший приоритет

//    console.log(!true);
//    // будет лож

//    console.log(!null);
//    // будет тру

//    console.log(!24);
//    // будет лож

//    // Пример

//    console.log(!true && 58 || 18 && !1);
//    // сначала !true => false, false && 58 => false, 18 && !1 => !1(0, false), false || !1(0, false) => false



//    // Сделать булевый оператор !! или Boolean писать

//    console.log(!!"Дом");
//    // будет тру
//    console.log(!!"");
//    // будет лож


//    // Не null - ??


//    let name5 = '';
//    console.log(name5 ?? "имя");


//    // Примеры

//    console.log('35' + '22');
//    console.log('35' * '22');
//    console.log('35' - '22');
//    console.log('35' > 22);






// //__________________________Функции______________________________________






//    // Функции

//    function name(params) {
      
//    }

//    showMessage ();

//    function showMessage() {
//       console.log('Сообщение');
//    }

//    showMessage ();
//    showMessage ();


//    // Работа с функциями

//    function calcSum(numOne, numTwo) {
//       // function calcSum(numOne = 1, numTwo = 5) { - задать значения по умолчанию
//       console.log(numOne);
//       console.log(numTwo);

//       let numSum  = numOne + numTwo;
      
//       console.log(`Результат: ${numSum}`);
//    }

//    calcSum (1, 5);




//    // Функции колбэки

//    function calcSum2 (numOne1, numTwo1, more, less) {
//       let sum = numOne1 + numTwo1;
      
//       if (sum > 3) { 
//          more();
//       } else {
//          less();
//       }
//    }

//    function showMore() {
//       console.log('Больше 3');
//    }

//    function showLess() {
//       console.log('Меньше 3');
//    }

//    calcSum2 (1, 1, showMore, showLess);

//    // Return - возврат 

//    function calcSum2 (numOne2, numTwo2) {
//       let sum1 = numOne2 + numTwo2;
      
//       return sum1;
//       // код ниже - не выполняется
//    }

//    let result6 = calcSum2(1, 1);

//    console.log(`Сумма ${result6}`);



//    // Рекурсия (когда функция сама взаимодействует с собой)
//    // Пример с for

//    function calcSumm4(numOne4, numTwo4) {
//       let result7 = 1;

//       for (let i = 0; i < numTwo4; i++) {
//          result7 *= numOne4;
//       }
//       return result7;
//    }

//    console.log(calcSumm4(3, 2));

//    // Пример с рекурсией

//    function calcSumm5(numOne5, numTwo5) {
//       if (numTwo5 === 1) {
//          return numOne5;
//       } else {
//          return numOne5 * calcSumm5(numOne5, numTwo5 - 1);
//       }
//    }
//    console.log(calcSumm5(3, 2));.










//__________________________Массивы______________________________________



// Объявить массив: let arrOne = []

let arrOne = [
   'Ваня',
   'Света',
   'Лола',
];

// или 

let arrOne2 = ['Ваня', 'Света', 'Лола',];




// выводить определенные значения, начиная с 0

console.log(arrOne[2]);





// более сложные примеры

let arrTwo = [
   'Коля',
   {
      type: 'JS so good',
      age: Infinity,
   },
   true,
   function () {
      console.log('Я сасный');
   },
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);     // [] + .имя ключа
console.log(arrTwo[2]);
arrTwo[3]();                     // вызвать функцию, в [] указать позицию



// многомерные массивы

let matrix = [
   [1, 3, 11],
   [6, 15, 8],
   [6, 47, 5],
];

console.log(matrix);
console.log(matrix[1][0]);    // в [] указываются позиции массива




// length вывести только это

console.log(matrix.length);


// Доступ к массиву

let arr = ['Vyasya', 'Ivat', "Yolia"];
console.log(arr);

let newarr = arr;

newarr.length = 2;

console.log(arr);


// Менять значения

arr[0] = 'Evgesa';
console.log(arr);

// Добавить новое

arr[3] = 'Billy';
console.log(arr);





// Метод push - добавляет в конец массива

let arr2 = ['Billy', 'Jim',];
arr2.push('Lena');
console.log(arr2);


// Удалить первый элемент и сдвигает <=

arr2.shift();
console.log(arr2);

// Удалить последний элемент

arr2.pop();
console.log(arr2);


// Добавить в начало массива

arr2.unshift('Petya');
console.log(arr2);





// Рил таф делит

// Удалять - splice(с какого начинать, сколько удалить)
let arr3 = ['Petya', 'Vasya', "Diana"];
arr3.splice(1, 1);
console.log(arr3);


// Чтобы удалить и вывести потом удаленный элемент нужно:
let removed = arr3.splice(1, 1);
console.log(removed);


// Заменить
let arr4 = ['Petya', 'Vasya', "Diana"];
arr4.splice(0, 1, 'Natalya');
console.log(arr4);


// Добавить элементы splice (1, 0, 'Text') - 0 удалить
arr4.splice(1, 0, 'Evgenia');
console.log(arr4);


// Удалить последний элемент splice(-1, 1) - (-1) означает первый с конца
arr4.splice(-1, 1);
console.log(arr4);




// Копирование массивов через .slice(1, 2); 1-начало, 2-конец(не включительно)

let arr5 = ['Petya', 'Vasya', "Diana"];
arr5.slice(0, 1);
console.log(arr5);


// Просто дубль массива
let arr6 = arr5.slice();
console.log(arr6);



// Еще один дубль + можно добавить

let arr7 = arr6.concat('Lida');
console.log(arr7);


// Плиск в массиве такой же через 
// indexOf
// lastIndexOf
// includes



// Поиск и вывод объектов в массиве find

let arr8 = [
   { name11: 'Vasya', age: 38 },
   { name11: 'Kolya', age: 18 },
   { name11: 'Olya', age: 13 },
];

let resultArr = arr8.find(function (item, index, array) { // item - элемент массива, index - ключ (позиция), array - весь массив
   return item.age < 18;
});

console.log(resultArr);

// findIndex - тоже самое, только возвращается номер строки



// filter - тоже поиск, но он не прекращается, а выводит все элементы подходящие под условия

let arr9 = [
   { name11: 'Vasya', age: 38 },
   { name11: 'Kolya', age: 18 },
   { name11: 'Olya', age: 13 },
];

let resultArr2 = arr9.filter(function (item, index, array) {
   return item.age < 30;
});
console.log(resultArr2);


// Сортировка по алфавитному порядку sort

let arr10 = ['Petya', 'Vasya', "Diana", "Дима",];
console.log(arr10.sort());

// Сортировка чисел

let arr11 = [3, 22, 8];
console.log(arr11.sort()); // неверная сортировка, есть 3 способа:

// 1 способ, добавить функцию
function compare(a, b) {
   console.log(`Сравниваем ${a} и ${b}`);
   if (a > b) return 1;
   if (a == b) return 0;
   if (a < b) return -1;
};
console.log(arr11.sort(compare));


// 2 способ заменить if на return
function compare(a, b) {
   console.log(`Сравниваем ${a} и ${b}`);
   return a - b;
};
console.log(arr11.sort(compare));

// 3 способ, строчный способ
console.log(arr11.sort((a, b) => a - b));


// Поменять на обратный reverse

let arr12 = ['Petya', 'Vasya', "Diana", "Дима",];
console.log(arr12.reverse());





// Преобразование массивов

// map - вызывает функцию для каждого элемента массива и возвраает массив результатов выполнения этой функции

let arr13 = ['Petya', 'Vasya', "Diana", "Дима",];

let result13 = arr13.map(function (item, index, array) {
   return item;
});


console.log(arr13);
console.log(result13);




// Разделитель и объединитель :)

// split преобразовывает строку в массив по заданному разделителю

let str = "Ivan, Lola, Jim";

let arr = str.split(",");
console.log(arr);


// можно ограничить количество

let arr2 = str.split(",", 2); // вывести только 2 значения 
console.log(arr2);



// join - объединяет, принцип тот же

let arr3 = ['Ivan', 'Ilya', 'Jhonny'];
let str3 = arr3.join(','); // (';') также может быть разделителем
console.log(str3);

// можно также через String, но тогда разделитель будет только , а в пред. случае, разделитель может быть любой

let arr4 = ['Ivan', 'Ilya', 'Jhonny'];
console.log(String(arr4));





// проверка на массив, хз зачем

let obj = {};
let arr6 = [];

console.log(typeof obh);
console.log(typeof arr6);

if (Array.isArray(obj)) {
   console.log('Это массив');
} else {
   console.log('О боже, это же не массив!');
}





// Перебор элементов

let arr7 = ['Ivan', 'Ilya', 'Jhonny'];
console.log(arr7.length);

for (let i = 0; i < arr7.length; i++) {
   console.log(arr7[i]);
}


// А можно сделать через FOR...OF

let arr8 = ['Ivan', 'Ilya', 'Jhonny'];

for (let arrItem of arr8) {
   console.log(arrItem);
}


// А еще можно сделать через forEach - выполняет функцию для каждого элемента массива

let arr9 = ['Sonya', 'Madara', 'Bond,'];

arr9.forEach(function (item, index, array) {
   console.log(`${item} находится на ${index} позиции в ${array}`);
});

   // также можно:

   let arr10 = ['Sonya', 'Madara', 'Bond,'];
   arr10.forEach(show);

   function show(item) {
      console.log(item);
   }

   


// Люто. reduce / reduceRight

let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function(previousValue, item, index, array) {
   return item + previousValue;
}, 0); // previousValu = 0
console.log(reduceValueOne);


// previousValue = 0 + 1 (item)
// previousValue = 1 + 2 (item) и так далее, и до 10


// Если previousValue не задано (0 после скобки) то он автоматом будет первым элементом в массиве, а работа начнется со второго


let arrTwo = ['Vanya', 'Ivan', 'Evgesha'];

let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
   console.log(previousValue);
   console.log(item);
   return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);



// previousRight - тоже самое, толкьо проходит по массиву справа на лево



   // Итого:

   // Массив является объектом arr = {}
   // К массиву можно добавлять нечисловое свойство

   let org = ['Vanya', 'Ivan', 'Evgesha'];
   
   org.name = 'Kolya';
   console.log(org); // добавится: "name: Kolya"




   // Итог итог: массивы тчательно настроены для работы с однотипными упоряточенными данными, если делать произвольные ключи, то лучше использовать объекты
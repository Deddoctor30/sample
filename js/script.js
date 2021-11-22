

//_____________________________Математика___________________________________



   let x;   

   // Сложение
   x = 5 + 8;
   console.log(`Результат сложения ${x}`);

   let result = "Дом" + " который" + " построил Джек"
   console.log(result);

   let result2 = "Дом " + 22;
   console.log(result2);
   console.log(typeof result2);

   let result3 = 22 + 11 + " Дом";
   console.log(result3);

   // + перед строкой переводит строку в число
   let result5 = + "11";
   console.log(result5);
   console.log(typeof result5);

   // + перез выводом делают их числами и выполняет операцию 25 + -10 = 15 аналог если ставить Number перед user1 и user2
   let user1 = "25";
   let user2 = "-10";
   console.log(+user1 + +user2);




   // Вычетание
   x = 7 - 9;
   console.log(`Результат сложения ${x}`);

   // любые операторы строки и числа переводят результат в число и выполняют операцию
   let result4 = "22" - 10;
   console.log(result4);
   console.log(typeof result4);




   // Умножение
   x = 2 * 16;
   console.log(`Результат сложения ${x}`);

   // Деление
   x = 13 / 2;
   console.log(`Результат сложения ${x}`);

   // Взятие остатка от деления %
   x = 13 % 2;
   console.log(`Результат сложения ${x}`);

   // Взятие в степень **
   x = 13 ** 2;
   console.log(`Результат сложения ${x}`);






//_____________________________Присвоения___________________________________





   // Присвоение = (но лучше так не делать) результат будет a = 4, а не 5

   let a = 5;
   let b = 1;

   let sum = 8 - ( a = b + 3);
   console.log(a);




   // Присвоение через =

   let result1 = result2 = result3 = 1 + 2;
   console.log(result1);
   console.log(result2);
   console.log(result3);




   // Короткая запись d += 1 + 3

   let c = 5;
   c = c + 1 + 3;
   console.log(c);

   let d = 5;
   d += 1 + 3;
   console.log(d);


//________________________________________________________________


   // Инкремент ++ - увеличивает значение на 1

   let inc = 5;
   inc++;
   console.log(inc);

   // Декремент -- - уменьшает значение на 1

   let dec = 5;
   dec--;
   console.log(dec);

   // inc++ и ++inc имеют разницу при выводе через console.log(inc)
   // inc = 0, inc++, результат = 0. Если inc = 0, ++inc, результат 1.

   let mat = 0;
   let newmat = 2 * ++mat;
   console.log(newmat);







//___________________________Операторы_____________________________________







   // Операторы сравнения (возвращают true or false)

   // <, >, <=, >=, == - равно, != - не равно, === строго равно, !== строго не равно.

   console.log(2 > 1);
   console.log(2 < 1);
   console.log(25 == 13);
   console.log(7 != 11);

   // Приводит строчный элемент к числовому
   console.log('51' == 51);

   // Присвоить переменной

   let f = 2 > 1;
   console.log(f);


//________________________________________________________________

   // Строгие операторы сравнивают не приводя к числовому
   // false
   console.log('51' === 51);

//________________________________________________________________

   // Логические операнды 

   // || - оператор или. Вернет true, или если тру нет тогда false (читает слева на право) (т.е. переменные с данными)

   console.log(0 || 1);
   console.log(true || 1);
   console.log(null || 'fixIt' || 12);
   console.log(null || '' || 12);

   // так

   let name2 = '';
   let surrname = "возраст";

   let user = name2 || surrname || "имя пользователя"

   console.log(user);

   // или так
   // если юзер меньше админа, будет юзер +1, иначе будет юзер
   let user3 = 0;
   let admin = 5;

   user3 > admin || user3++;

   console.log(user3);


   // && - оператор и, тоже что и || только возращает flase, а если только тру, тогда возращает тру(или последний тру или фалс).

   console.log('дом' && 0 && 14);
   console.log('дом' && 11 && 14);

   // && - больший приоритет чем у ||

   console.log('дом' && 1 || 0 && 5);
   // сначала 'дом' && 1, потом 0 && 5, а затем 1 // 0.

   // Пример

   let user5 = 1;
   user5 > 0 && console.log(`Пользователь: ${user5}`);
   // если user5 = 1, то выводится пользователь: user5, если 0, то ничего не выводится



   // Оператор ! не - меняет буллевые операторы. Наивысший приоритет

   console.log(!true);
   // будет лож

   console.log(!null);
   // будет тру

   console.log(!24);
   // будет лож

   // Пример

   console.log(!true && 58 || 18 && !1);
   // сначала !true => false, false && 58 => false, 18 && !1 => !1(0, false), false || !1(0, false) => false



   // Сделать булевый оператор !! или Boolean писать

   console.log(!!"Дом");
   // будет тру
   console.log(!!"");
   // будет лож


   // Не null - ??


   let name5 = '';
   console.log(name5 ?? "имя");


   // Примеры

   console.log('35' + '22');
   console.log('35' * '22');
   console.log('35' - '22');
   console.log('35' > 22);






//__________________________Функции______________________________________






   // Функции

   function name(params) {
      
   }

   showMessage ();

   function showMessage() {
      console.log('Сообщение');
   }

   showMessage ();
   showMessage ();


   // Работа с функциями

   function calcSum(numOne, numTwo) {
      // function calcSum(numOne = 1, numTwo = 5) { - задать значения по умолчанию
      console.log(numOne);
      console.log(numTwo);

      let numSum  = numOne + numTwo;
      
      console.log(`Результат: ${numSum}`);
   }

   calcSum (1, 5);




   // Функции колбэки

   function calcSum2 (numOne1, numTwo1, more, less) {
      let sum = numOne1 + numTwo1;
      
      if (sum > 3) { 
         more();
      } else {
         less();
      }
   }

   function showMore() {
      console.log('Больше 3');
   }

   function showLess() {
      console.log('Меньше 3');
   }

   calcSum2 (1, 1, showMore, showLess);

   // Return - возврат 

   function calcSum2 (numOne2, numTwo2) {
      let sum1 = numOne2 + numTwo2;
      
      return sum1;
      // код ниже - не выполняется
   }

   let result6 = calcSum2(1, 1);

   console.log(`Сумма ${result6}`);



   // Рекурсия (когда функция сама взаимодействует с собой)
   // Пример с for

   function calcSumm4(numOne4, numTwo4) {
      let result7 = 1;

      for (let i = 0; i < numTwo4; i++) {
         result7 *= numOne4;
      }
      return result7;
   }

   console.log(calcSumm4(3, 2));

   // Пример с рекурсией

   function calcSumm5(numOne5, numTwo5) {
      if (numTwo5 === 1) {
         return numOne5;
      } else {
         return numOne5 * calcSumm5(numOne5, numTwo5 - 1);
      }
   }
   console.log(calcSumm5(3, 2));
// Домашка
// 1. Получить в переменную элемент с атрибутом data-say-hi и прочитать
// <div data-say-hi="yes">Привет!</div>

const test1 = document.querySelector('[data-say-hi]');
console.log(test1);


// 2. Получить в переменную элемент с текстом Йончи

/* <ul>
<li>Корчи</li>
<li>Йончи</li>
</ul> */

const test3 = document.querySelector('ul');

const test2 = test3.lastElementChild
console.log(test2.textContent); // вывести значение тега


// 3. Получить в переменную коллекцию элементов с классом like
/* <div class="like"></div>
<div class="subscribe">1231321231</div>
<div class="like subscribef">1231321231</div> */

const test4 = document.querySelectorAll('.like');
console.log(test4);




// 4. Куда добавится <li>Текст</li> ?

// JS
const list3 = document.querySelector('.test');

list3.insertAdjacentHTML(
   'beforeend',
   `<li>Текст1313121</li>`
);




// HTML
/* <ul>
   <li>Пункт 1</li>
   <li>Пункт 2</li>
</ul> */
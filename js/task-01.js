/* Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в ul#categories,
    то есть элементов li.item. Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul#categories, найдет и выведет
    в консоль текст заголовка элемента (тега h2) и количество элементов в
    категории (всех вложенных в него элементов li).
Например для первой категории получится:
Категория: Животные
Количество элементов: 4
*/
const listEl = document.querySelector(`#categories`);
console.log(`В списке ${[listEl.children.length]} категории.`);
[...listEl.children].forEach((element) => {
  console.log(`Категория: `, element.firstElementChild.textContent);
  console.log(`Количество элементов: `, element.lastElementChild.querySelectorAll(`li`).length);
});

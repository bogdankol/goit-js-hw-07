// Напиши скрипт для создания галлереи изображений по массиву данных.

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(`#gallery`);
galleryRef.classList.add(`js-gallery`);

// 1 - string - we insert stringed all li-s as one innerHTML string - html transforms it into
// markup automatically
const toDoListMarkUp = function ({ url, alt }) {
  return `<li><img src=${url} alt=${alt}></li>`
}
const arrayToString = images.map(element => toDoListMarkUp(element)).join(``)
galleryRef.insertAdjacentHTML(`afterbegin`, arrayToString)



// 2
// const lis = images.map(({ url, alt }) => {
//   const liEl = document.createElement(`li`);
//   liEl.insertAdjacentHTML(
//     `beforeend`,
//     `<img src=${url} alt=${alt}></img>`
//   );
//   return liEl;
// })
// galleryRef.append(...lis)

// другой способ
// images.forEach(({url, alt}) => {
//     const liEl = document.createElement(`li`);
//     const imgEl = document.createElement(`img`);

//     imgEl.setAttribute(`src`, url);
//     imgEl.setAttribute(`alt`, alt);
//     liEl.appendChild(imgEl);
//     galleryRef.appendChild(liEl);
// })

//третий способ - оптимизация
// images.forEach(({ url, alt }) => {
//   galleryRef.insertAdjacentHTML(
//     `beforeend`,
//     `<li><img src=${url} alt=${alt}></img></li>`
//   );
// });

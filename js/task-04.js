// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incBtnRef = document.querySelector(`button[data-action="increment"]`)
const decBtnRef = document.querySelector(`button[data-action="decrement"]`)
const counterRef = document.querySelector(`#value`)
let counterValue = Number(counterRef.textContent);

function onIncrement() {
    counterRef.textContent = counterValue += 1;
}
function onDecrement() {
    counterRef.textContent = counterValue -= 1;
}
incBtnRef.addEventListener(`click`, onIncrement);
decBtnRef.addEventListener(`click`, onDecrement);








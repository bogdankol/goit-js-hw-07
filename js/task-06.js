// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector(`#validation-input`)

inputRef.addEventListener(`focus`, onFocusInput)
inputRef.addEventListener(`blur`, onBlurInput)
function onFocusInput() {
  inputRef.classList.remove(`valid`);
  inputRef.classList.remove(`invalid`);
}
function onBlurInput() {
  const value = inputRef.value.trim();
    value.length === Number(inputRef.getAttribute(`data-length`)) ?
      inputRef.classList.add(`valid`) :inputRef.classList.add(`invalid`);
}













function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const containerRef = document.querySelector('#boxes');
const btnDestroyRef = document.querySelector('[data-destroy]');
const btnCreateRef = document.querySelector('[data-create]');
const inputRef = document.querySelector('input');

btnDestroyRef.addEventListener('click', destroy);
function destroy() {
  containerRef.innerHTML = '';
}

btnCreateRef.addEventListener('click', create);
function create() {
  const numbers = [];
  for (let i = 1; i <= inputRef.value; i += 1){
    numbers.push(i)
    }

const newDiv = numbers.map((number, index) => {
  const color = getRandomHexColor();
  const width = 30 + 10 * index;
  return `<div style = 'width:${width}px; height:${width}px; background-color:${color};'></div>`
});
  containerRef.insertAdjacentHTML('beforeend', newDiv.join(''))
};

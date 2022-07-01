const decrementRef = document.querySelector("[data-action='decrement']");
const incrementRef = document.querySelector("[data-action='increment']");
const valueRef = document.querySelector('#value');
// const counterRef = document.querySelector('#counter');

let counterValue = 0;
const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
    console.log(counterValue);
}
const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
    console.log(counterValue);
}

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
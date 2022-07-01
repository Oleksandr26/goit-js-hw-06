const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    textRef.style.fontSize = event.currentTarget.value + 'px';
});
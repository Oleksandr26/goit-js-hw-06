const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value.trim() === '') {
        return nameOutputRef.innerHTML = 'Anonymous';
    }
    nameOutputRef.textContent = event.currentTarget.value; 
});
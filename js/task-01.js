// const listRef = document.querySelector('#categories')
const itemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', itemsRef.length);



itemsRef.forEach((item) => {
    const titleRef = item.querySelector('h2');
    console.log('Category:', titleRef.textContent);
    const liRef = item.querySelectorAll('li')
    console.log('Elements:', liRef.length)
})

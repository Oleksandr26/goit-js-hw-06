const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listRef = document.querySelector('#ingredients')

const itemListRef = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient
  li.classList.add('item')
  return li
})

listRef.append(...itemListRef)
console.log(listRef);

// const makeListRefOptions = options => {
//   return options.map(option => {
//     const li = document.createElement('li');
//     li.textContent = option;
//     li.classList.add('item');
//     return li;
//   });
// };

// const elements = makeListRefOptions(ingredients);
// listRef.append(...elements)
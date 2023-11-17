const instructions = `
    when click on the button,
    take the value from the input,
    create li element with the value,
    append the li to the ul (appendChild).
    reset the value of the input.  `


const addTodoInput = document.querySelector('#addTodoInput'); 
// const addTodoButton = document.querySelector('addTodoButton');
const todoList = document.querySelector('ul');

// add event listener to button to handle clickevent
// when click on the button,
function createNewTodoListEntry() {
    // take the value from the input
    const inputValue = addTodoInput.value;

    // take the value from the input
    const newTodoItem = document.createElement('li');

    // create li element with the value
    newTodoItem.innerText = inputValue;

    // append the li to the ul (appendChild)
    todoList.appendChild(newTodoItem);

    // reset the value of the input
    addTodoInput.value = ' ';
}




// button.addEventListener('click', () => {
//   const text = input.value;
  
//   const li = document.createElement('li');
//   li.textContent = text;
  
//   ul.appendChild(li);
  
//   input.value = '';
// });



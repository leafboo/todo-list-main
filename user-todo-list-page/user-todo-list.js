const backButton = document.querySelector('.js-back-button');
const userName = document.querySelector('.js-user-name');
backButton.addEventListener('click', () => {window.location.href = '/home-page/index.html'});
userName.textContent = `${localStorage.getItem('passThis')}'s Todo List`;

let todolistData = [];

const createButton = document.querySelector('.js-create-todo-button');
const createTodoContainer = document.querySelector('.js-create-todo-container');
createButton.addEventListener('click', createTodolist);

function createTodolist() {
  if (todolistData.length <= 13) {
    // create the input text, create and delete button
    createButtons();

    // DO THIS LATER
    const createTodoButton = document.querySelector('.js-create-todo-button');
    const name = document.querySelector('.js-input-name');

    // when the create todo button is pressed
    
  }
}

// create a function to store the todolist to the user's array

function createButtons() {
  // remove the create button 
  createTodoContainer.textContent = '';

  let df = new DocumentFragment();
  // create todo input
  let input = document.createElement('input');
  input.className = 'input-todo js-input-todo';
  input.type = 'text';
  input.placeholder = 'Enter task';
  // create make todo button
  let button = document.createElement('button');
  button.className = 'create-todo-button active js-create-todo-button';
  button.textContent = 'Create';
  // create the back button
  let backButton = document.createElement('button');
  backButton. className = 'create-todo-button active todo-back-button'
  backButton.textContent = 'X';
  backButton.addEventListener('click', goBack);

  df.append(input, button, backButton);
  createTodoContainer.appendChild(df);

  function goBack() {
    createTodoContainer.textContent = '';
    let df = new DocumentFragment();
    let createButton = document.createElement('button');
    createButton.className = 'create-todo-button js-create-todo-button';
    createButton.textContent = 'Add todo';
    createButton.addEventListener('click', createTodolist);
    df.appendChild(createButton);
    createTodoContainer.appendChild(df);
  }
}


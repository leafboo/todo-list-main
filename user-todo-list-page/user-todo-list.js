const boxElement = document.querySelector('.js-box');

const backButton = document.querySelector('.js-back-button');
backButton.addEventListener('click', () => {window.location.href = '/home-page/index.html'});

const passedName = localStorage.getItem('passThis');
const userName = document.querySelector('.js-user-name');
userName.textContent = `${passedName}'s Todo List`;

// get the accounts data
const accountsData = JSON.parse(localStorage.getItem('accountsData'));
// find index of the name in the accountsData
const index = accountsData.findIndex((account) => account.name === passedName);
// destructuring
const { todolist } = accountsData[index];
// display the todo list of the user
displayTodolist();

const createButton = document.querySelector('.js-create-todo-button');
const createTodoContainer = document.querySelector('.js-create-todo-container');
createButton.addEventListener('click', createButtons);

function createButtons() {
  if (todolist.length <= 13) {
    // remove the create button 
    createTodoContainer.textContent = '';

    let df = new DocumentFragment();
    // create todo input
    let input = document.createElement('input');
    input.className = 'input-todo js-input-todo';
    input.type = 'text';
    input.placeholder = 'Enter task';
    input.addEventListener('keyup', (event) => event.key === 'Enter' ? addToData(input) : '');
    // create make todo button
    let button = document.createElement('button');
    button.className = 'create-todo-button active js-create-todolist-button';
    button.textContent = 'Create';
    button.addEventListener('click', () => {
      addToData(input);
      displayTodolist();
    });
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
      createButton.addEventListener('click', createButtons);
      df.appendChild(createButton);
      createTodoContainer.appendChild(df);
    }
  }
  
}


function displayTodolist() {
  boxElement.textContent = '';
  
  let df = new DocumentFragment();
  todolist.forEach((todo) => {
    // make div for both task and delete button
    let div = document.createElement('div');
    div.className = 'task-name-row';
    div.setAttribute('data-task-id', todo.id);
    df.appendChild(div);

    // span
    let span = document.createElement('span');
    span.textContent = todo.task;
    span.className = 'task-name';
    div.appendChild(span);

    // make delete button
    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.className = 'task-delete-button js-task-delete-button';
    button.addEventListener('click', () => { deleteTask(todo.id) });
    div.appendChild(button);
  });
  boxElement.appendChild(df);
}

function deleteTask(todolistId) {
  
  const todoIndex = todolist.findIndex((todo) => todo.id === todolistId);
  
  if (todoIndex !== -1) {
    // remove from array
    todolist.splice(todoIndex, 1);
    // update the array
    localStorage.setItem('accountsData', JSON.stringify(accountsData));
    // remove from the DOM
    const deleteThis = document.querySelector(`[data-task-id="${todolistId}"]`);
    deleteThis.remove();
  }
}

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9)
}

function addToData(task) {
  if (index !== -1 && todolist.length < 13 && task.value) {
    let uniqueId = passedName + '_'+ generateUniqueId();
    todolist.push({task: task.value, id: uniqueId});
    localStorage.setItem('accountsData', JSON.stringify(accountsData));
    displayTodolist();
    task.value = '';
    
  }
}
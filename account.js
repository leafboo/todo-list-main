const createAccountContainerElement = document.querySelector('.js-create-account-container');
const boxElement = document.querySelector('.js-box');

let accountsData = [];

export function createAccountEventListener() {
  // checks if the account box is full and if not, run the function
  if (accountsData.length <= 13) {
    // create the input text, create and delete button
    createInputTodo();
    
    const createAccountButton = document.querySelector('.js-create-account-button');
    const name = document.querySelector('.js-input-name');

    // when the create account button is pressed
    createAccountButton.addEventListener('click', () => createAccount(name));
    name.addEventListener('keyup', (event) => event.key === 'Enter' ? createAccount(name) : '');

    

  }
  
}

function createAccount(name) {
  
  if (accountsData.length <= 13 && name.value) {

    const accountId = generateUniqueId();
    accountsData.push({id: accountId, name: name.value});

    let df = new DocumentFragment();

    
    // display accounts
    let div = document.createElement('div');
    div.textContent = name.value;
    div.className = 'account-names';
    div.setAttribute('data-account-id', accountId);
    df.appendChild(div);

    // make delete button
    let button = document.createElement('button');
    button.textContent = 'Delete';
    button.className = 'delete-button js-delete-button';
    button.addEventListener('click', () => { deleteAccount(accountId); });
    div.appendChild(button);

  
    boxElement.appendChild(df);
    name.value = '';
  }
}

function deleteAccount(accountId) {
  const index = accountsData.findIndex((account) => account.id === accountId);
  if (index !== -1) {
    // remove from the array
    accountsData.splice(index, 1);
    // remove from the DOM
    const deleteThis = document.querySelector(`[data-account-id="${accountId}"]`);
    deleteThis.remove();

  }
}


function generateUniqueId() {
  return 'accountId_' + Math.random().toString(36).substr(2, 9);
}


function createInputTodo() {
  // remove the create button 
  createAccountContainerElement.innerHTML = '';

  let df = new DocumentFragment();
  // create account input
  let input = document.createElement('input');
  input.className = 'input-name js-input-name';
  input.type = 'text';
  input.placeholder = 'Enter your name';
  // create make account button
  let buttonCreate2 = document.createElement('button');
  buttonCreate2.className = 'create-account active js-create-account-button';
  buttonCreate2.textContent = 'Create';
  // create the back button
  let buttonBack = document.createElement('button');
  buttonBack.className = 'create-account active back-button';
  buttonBack.textContent = 'X';

  df.appendChild(input);
  df.appendChild(buttonCreate2);
  df.appendChild(buttonBack);
  // append input, create button, and back button to the HTML
  createAccountContainerElement.appendChild(df);

  let backButtonElement = document.querySelector('.back-button');
  backButtonElement.addEventListener('click', goBack);
  // go back to default page
  function goBack() {
    createAccountContainerElement.innerHTML = '';
    let df = new DocumentFragment();
    let buttonCreateOne = document.createElement('button');
    buttonCreateOne.className = 'create-account js-create-account';
    buttonCreateOne.textContent = 'Create account';
    df.appendChild(buttonCreateOne);
    createAccountContainerElement.appendChild(df);
      
    
    buttonCreateOne.addEventListener('click', createAccountEventListener);
  }
}
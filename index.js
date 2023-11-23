const createAccountContainerElement = document.querySelector('.js-create-account-container');
const boxElement = document.querySelector('.js-box');
let createAccountElement = document.querySelector('.js-create-account');

createAccountElement.addEventListener('click', createAccount);


// store the data of accounts here
let accountData = [];



function createAccount() {
  
  createAccountContainerElement.innerHTML = '';
  let df = new DocumentFragment();
  // create input
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
  createAccountContainerElement.appendChild(df);
    


    
    // display and store accounts data
    const createAccountButton = document.querySelector('.js-create-account-button');
    const name = document.querySelector('.js-input-name');
    createAccountButton.addEventListener('click', () => {
      let df = new DocumentFragment();
      // Store data to array
      accountData.push(name.value);
      // display accounts
      let div = document.createElement('div');
      div.textContent = name.value;
      df.appendChild(div);

      boxElement.appendChild(df);
      name.value = '';
    });
    
    



    let backButtonElement = document.querySelector('.back-button');
    backButtonElement.addEventListener('click', goBack);
    
    function goBack() {
      createAccountContainerElement.innerHTML = '';
      let df = new DocumentFragment();
      let buttonCreateOne = document.createElement('button');
      buttonCreateOne.className = 'create-account js-create-account';
      buttonCreateOne.textContent = 'Create account';
      df.appendChild(buttonCreateOne);
      createAccountContainerElement.appendChild(df);
        
      
      buttonCreateOne.addEventListener('click', createAccount);
    }
    
}



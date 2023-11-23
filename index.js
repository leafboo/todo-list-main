const createAccountContainerElement = document.querySelector('.js-create-account-container');
const boxElement = document.querySelector('.js-box');
let createAccountElement = document.querySelector('.js-create-account');
createAccountElement.addEventListener('click', createAccount);
createAccountElement.addEventListener('click', addAccountToBox);

// store the data of accounts here
let accountData = [];



function createAccount() {
  
 



  createAccountContainerElement.innerHTML = `
    <input class="input-name js-input-name" type="text" placeholder="Enter your name">
    <button class="create-account active js-create-account-button">Create</button>
    <button class="create-account active back-button">X</button>
    `;
    
    
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
      createAccountContainerElement.innerHTML = `
        <button class="create-account js-create-account">Create account</button>`;
        
      createAccountElement = document.querySelector('.js-create-account');
      createAccountElement.addEventListener('click', createAccount);
    }
    
}

function addAccountToBox() {
  boxElement.innerHTML += `<div></div>`;
}



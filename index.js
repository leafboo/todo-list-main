const createAccountContainerElement = document.querySelector('.js-create-account-container');
const boxElement = document.querySelector('.js-box');
let createAccountElement = document.querySelector('.js-create-account');
createAccountElement.addEventListener('click', createAccount);
createAccountElement.addEventListener('click', addAccountToBox);





function createAccount() {
  let df = new DocumentFragment();
  createAccountContainerElement.innerHTML = `
    <input class="input-name js-input-name" type="text" placeholder="Enter your name">
    <button class="create-account active">Create</button>
    <button class="create-account active back-button">X</button>
    `;
    

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



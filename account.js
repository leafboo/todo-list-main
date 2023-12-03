const createAccountContainerElement = document.querySelector('.js-create-account-container');
const boxElement = document.querySelector('.js-box');


let accountsData = [];




export function createAccount() {
  // checks if the account box is full and if not, run the function
  if (accountsData.length <= 19) {
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
      




    const createAccountButton = document.querySelector('.js-create-account-button');
    const name = document.querySelector('.js-input-name');

    // when the create account button is pressed
    createAccountButton.addEventListener('click', () => {
      if (accountsData.length <= 19) {
        let df = new DocumentFragment();

        
        // Store data to array
        accountsData.push(name.value);
        // display accounts
        let div = document.createElement('div');
        div.textContent = name.value;
        div.className = 'account-names';
        div.id = name.value;
        df.appendChild(div);

        // make delete button
        let button = document.createElement('button');
        button.textContent = 'Delete';
        button.className = 'delete-button js-delete-button';
        button.id = name.value;
        div.appendChild(button);
        
        // make delete button functional
        // foreach accountsData[], do this!!!!
        const accountId = div.id;
        const selectAll = document.querySelectorAll('.js-delete-button');
        selectAll.forEach((button) => {
          button.addEventListener('click', () => {
          
          console.log(accountId);
        })
        });
        
      
        boxElement.appendChild(df);
        name.value = '';
      }
      
    });
    



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
        
      
      buttonCreateOne.addEventListener('click', createAccount);
    }
    
  }
  
}



function deleteAccount(accountId) {
  let accountDiv = document.getElementById(accountId);
  if (accountId) {
    accountDiv.remove();

    const index = accountsData.indexOf(accountId);
    accountsData.splice(index, 1);
  }
  
}



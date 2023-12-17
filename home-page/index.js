import { createAccountEventListener, displayAccounts } from "./account.js";
let createAccountElement = document.querySelector('.js-create-account');

createAccountElement.addEventListener('click', createAccountEventListener);

// display accounts saved from the local storage 
displayAccounts();







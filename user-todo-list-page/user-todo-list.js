const backButton = document.querySelector('.js-back-button');
const userName = document.querySelector('.js-user-name');
backButton.addEventListener('click', () => {window.location.href = '/home-page/index.html'});
userName.textContent = `${localStorage.getItem('passThis')}'s Todo List`;
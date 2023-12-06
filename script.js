const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('nav').querySelector('input');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.classList.remove('reg');

})

registerLink.addEventListener('click', () => {
    wrapper.classList.add('reg');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('reg')
})
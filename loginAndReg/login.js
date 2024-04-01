/*

inspiration: 
https://dribbble.com/shots/2292415-Daily-UI-001-Day-001-Sign-Up

*/

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = "http://localhost/IWP-project/index.html";
});

let register = document.getElementById('register');
register.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = "http://localhost/IWP-project/loginAndReg/registration.html";
});
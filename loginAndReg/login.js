/*

inspiration: 
https://dribbble.com/shots/2292415-Daily-UI-001-Day-001-Sign-Up

*/

// let form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   window.location.href = "http://localhost/IWP-project/index.html";
// });

$('form').validate({
  rules:{
    email: {
      required: true,
      email: true
    },
    password: "required"
  },
  messages:{
    email: {
      required: "Please enter your email",
      email: "Please enter a valid email address"
    },
    password: "Please enter password"
  },
  submitHandler: function(){
    window.location.href = "http://localhost/IWP-project/index.html";
  }
});

let register = document.getElementById('register');
register.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = "http://localhost/IWP-project/loginAndReg/registration.html";
});
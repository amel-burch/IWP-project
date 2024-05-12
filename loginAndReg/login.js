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
    // Serialize the form data
    var formData = $(form).find(':input').not('.exclude').serialize();
    $.ajax({
      url: 'http://localhost:80/IWP-project/backend/login',
      type: 'POST',
      data: formData,
      success: function(response) {
        window.location.href = "http://localhost/IWP-project/index.html";
      },
      error: function() {
        // Handle errors if any
        console.log('Error submitting form data');
      } 
    });
  }
});

let register = document.getElementById('register');
register.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = "http://localhost/IWP-project/loginAndReg/registration.html";
});
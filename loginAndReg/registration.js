$.validator.addMethod("passwordMatch", function (value, element) {
  return this.optional(element) || $('#pw').val() === value;
}, "Passwords do not match");

$('form').validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    password: "required",
    first_name: "required",
    last_name: "required",
    pw_repeat: {
      required: true,
      passwordMatch: true
    }
  },
  messages: {
    email: {
      required: "Please enter your email",
      email: "Please enter a valid email address"
    },
    password: "Please enter password"
  },
  submitHandler: function (form) {
    // Serialize the form data
    var formData = $(form).find(':input').not('.exclude').serialize();
    console.log(formData)
    $.ajax({
      url: 'http://localhost:80/IWP-project/backend/register_user.php',
      type: 'POST',
      data: formData,
      success: function(response) {
        // Handle success response here
        // For example, you can redirect the user or display a success message
        console.log('Form submitted successfully',response);
        // window.location.href = "http://localhost/IWP-project/loginAndReg/login.html";
      },
      error: function() {
        // Handle errors if any
        console.log('Error submitting form data');
      } 
    });
    return false; // Prevent the default form submission
  }
});
$.validator.addMethod("passwordMatch", function (value, element) {
  return this.optional(element) || $('#pw').val() === value;
}, "Passwords do not match");

$('form').validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    pw: "required",
    fn: "required",
    ln: "required",
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
  submitHandler: function () {
    window.location.href = "http://localhost/IWP-project/loginAndReg/login.html";
  }
});
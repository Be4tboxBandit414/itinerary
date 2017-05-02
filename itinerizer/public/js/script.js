// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the Sign In form.
  // It has the name attribute "signIn"
  $("form[name='signIn'], form[name='registration']").validate({
    // Specify validation rules
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

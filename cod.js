// A function to validate the form
function validateForm() {
    // Get the input elements by their id
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
  
    // Check if the password and confirm password values are the same
    if (password.value == confirmPassword.value) {
      // If they are the same, print true on the console and return true
      console.log(true);
      alert("Registration Successfull")
      return true;
    } else {
      // If they are not the same, print false on the console, alert a message, and return false
      console.log(false);
      alert("The passwords does not match!");
      return false;
    }
  }
  
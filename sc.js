const userName = document.getElementById("name");
const userid = document.getElementById("userid");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const city = document.getElementById("city");
const zipcode = document.getElementById("zipcode");
const gender = document.registration;



// function for form varification
function formValidation() {
  // checking length of name
  if (userName.value.length < 5 || userName.value.length > 20) {
    alert("User Id length should be more than 5 and less than 21 charaters");
    userName.focus();
    return false;
  }
  if (userid.value.length < 2 || userid.value.length > 20) {
    alert("User Id length should be more than 2 and less than 10 charaters");
    userid.focus();
    return false;
  }

  if (!email.value.match(/^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  // checking password character pattern
  if (!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
    alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.");
    password.focus();
    return false;
  }
  // checking phone number
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can\'t be 0!");
    phoneNumber.focus();
    return false;
  }
   // checking language
   if (city.value === "") {
    alert("Please select your city!")
    return false;
  }
  // checking zip code
  if (!zipcode.value.match(/^[0-9]{4}$/)) {
    alert("Zip code must be enter!");
    zipcode.focus();
    return false;
  }
  // checking gender
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    return false;
  }
 
  return true;
}
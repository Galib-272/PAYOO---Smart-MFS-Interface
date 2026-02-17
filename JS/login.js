document.getElementById("login-btn").addEventListener("click", function () {
  // get mobile number
  const inputnumber = document.getElementById("input-number");
  const contactnumber = inputnumber.value;
  console.log(contactnumber);
  // get pin
  const pinnumber = document.getElementById("input-pin");
  const pin = pinnumber.value;
  console.log(pin);
  // check validation
  if (contactnumber == "01234567890" && pin == "1122") {
    // if true: alert>homepage
    alert("Login successful");
    window.location.assign("/homepage.html");
  } else {
    // if false: alert>return
    alert("Login failed");
    return;
  }
});

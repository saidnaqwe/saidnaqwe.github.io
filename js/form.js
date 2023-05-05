const form = document.getElementById("membership-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const membership = document.getElementById("membership");
const startDate = document.getElementById("start-date");
const duration = document.getElementById("duration");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (name.value.trim() === "") {
    alert("Please enter your name.");
    name.focus();
    return;
  }

  if (email.value.trim() === "") {
    alert("Please enter your email.");
    email.focus();
    return;
  }

  if (phone.value.trim() === "") {
    alert("Please enter your phone number.");
    phone.focus();
    return;
  }

  if (membership.value === "") {
    alert("Please select a membership type.");
    membership.focus();
    return;
  }

  // If the form is valid, submit it
  alert("Thank you for submitting membership form!");
  form.submit();
});

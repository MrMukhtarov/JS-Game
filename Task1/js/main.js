"use strict";

function ShowHide() {
  let password = document.getElementById("password");
  let icon = document.getElementById("pas-icon");

  if (password.type == "password") {
    password.type = "text";
    icon.className = "fa-solid fa-eye";
  } else {
    password.type = "password";
    icon.className = "fa-solid fa-eye-slash";
  }
}

function CheckPassword() {
  let password = document.getElementById("password");
  let span = document.getElementById("check-pas");

  if (password.value.length > 9) {
    for (let i = 0; i < password.value.length; i++) {
      if (password.value[i] == "*") {
        span.innerHTML = "Strong";
        span.className = "badge rounded-pill text-bg-success";
        span.style.display = "block";
      } else {
        span.innerHTML = "Weak";
        span.className = "badge rounded-pill text-bg-danger";
        span.style.display = "block";
      }
    }
  } else {
    span.innerHTML = "Length Doesnt exist";
    span.className = "badge rounded-pill text-bg-danger";
    span.style.display = "block";
  }
}

function logIn() {
  try {
    location.href = "Signin.html";
  } catch (err) {
    console.error(err);
  }
}

function displayPassword1() {
  document.querySelector(".inputs1 i").classList.remove("fa-eye");
  document.querySelector(".inputs1 i").classList.add("fa-eye-slash");
  document.querySelector(".inputs1 input").setAttribute("type", "text");
  document
    .querySelector(".inputs1 i")
    .setAttribute("onclick", "hidePassword1()");
}

function hidePassword1() {
  document.querySelector(".inputs1 i").classList.remove("fa-eye-slash");
  document.querySelector(".inputs1 i").classList.add("fa-eye");
  document.querySelector(".inputs1 input").setAttribute("type", "password");
  document
    .querySelector(".inputs1 i")
    .setAttribute("onclick", "displayPassword1()");
}

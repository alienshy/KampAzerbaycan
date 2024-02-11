let url = "http://localhost:3000/user";
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form1 = document.querySelector(".form1");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  axios.post(url, {
    title: name.value,
    email: email.value,
    password: password.value,
    fav: [],
  });
  window.location = "./login.htm";

});



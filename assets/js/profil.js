let gir = document.querySelector(".gir");
let username = document.querySelector(".username")
let qeyd = document.querySelector(".qeyd");
let person = document.querySelector(".bi-person-circle")

let logout = document.querySelector("#trash");

let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;
if(user){
  username.innerHTML = `${user}`
  gir.style.display = "none"
  logout.style.display = "block";
  person.style.display = "block"
  qeyd.style.display = "none";
}
logout.addEventListener("click",()=>{
  localStorage.removeItem('currentUser');
  logout.style.display = "none"
  gir.style.display = "block"
  person.style.display = "none"
  qeyd.style.display = "block";
})
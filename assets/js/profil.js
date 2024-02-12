let gir = document.querySelector(".gir");
let qeyd = document.querySelector(".qeyd");
let person = document.querySelector(".bi-person-circle")

let logout = document.querySelector("#trash");

let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;
if(user){
  gir.innerHTML = `${user}`
  logout.style.display = "block";
  person.style.display = "block"
  qeyd.style.display = "none";
}
logout.addEventListener("click",()=>{
  localStorage.removeItem('currentUser');
  logout.style.display = "none"
  gir.innerHTML = "Giriş";
  person.style.display = "none"
  qeyd.style.display = "block";
})
let gir = document.querySelector(".gir");
let gir1 = document.querySelector(".gir1");
let username = document.querySelector(".username")
let username1 = document.querySelector(".username1")

let qeyd = document.querySelector(".qeyd");
let qeyd1 = document.querySelector(".qeyd1");

let person = document.querySelector(".bi-person-circle")
let person1 = document.querySelector(".circle")

let logout = document.querySelector("#trash");
let logout1 = document.querySelector("#trash1");

let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;
let id2=  localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).id : null;
let userBtn = document.querySelector(".userProfil");
console.log(gir);
if(user){
console.log("kmksmdls");
username.innerHTML = `${user}`
username1.innerHTML = `${user}`

gir.style.display = "none"
gir1.style.display = "none"
logout.style.display = "block";
logout1.style.display = "block";
person.style.display = "block"
person1.style.display = "block"

qeyd.style.display = "none";
qeyd1.style.display = "none";

userBtn.addEventListener("click",(e)=>{

  e.preventDefault()
  window.location=`./user.htm?id=${id2}`
})

}


logout.addEventListener("click",()=>{
  localStorage.removeItem('currentUser');
  logout.style.display = "none"
  gir.style.display = "block"
  person.style.display = "none"
  qeyd.style.display = "block";
  localStorage.removeItem('currentUser');
  logout1.style.display = "none"
  gir1.style.display = "block"
  person1.style.display = "none"
  qeyd1.style.display = "block";
})

logout1.addEventListener("click",()=>{
  localStorage.removeItem('currentUser');
  logout1.style.display = "none"
  gir1.style.display = "block"
  person1.style.display = "none"
  qeyd1.style.display = "block";
  localStorage.removeItem('currentUser');
  logout.style.display = "none"
  gir.style.display = "block"
  person.style.display = "none"
  qeyd.style.display = "block";
})
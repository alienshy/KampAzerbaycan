let gir = document.querySelector(".gir");
let username = document.querySelector(".username")
let qeyd = document.querySelector(".qeyd");
let person = document.querySelector(".bi-person-circle")
let logout = document.querySelector("#trash");
let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;
let id2=  localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).id : null;
let userBtn = document.querySelector(".userProfil");
console.log(id2);
if(user){

userBtn.addEventListener("click",(e)=>{

  e.preventDefault()
  window.location=`./user.htm?id=${id2}`
})

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
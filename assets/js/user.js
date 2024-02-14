let url = "http://localhost:3000/admin/"
let form = document.querySelector("form")
let file = document.querySelector("#file")
let imgdiv = document.querySelector(".divimg img")
let name = document.querySelector("#bolge")
let text = document.querySelector("#mekan")
let info = document.querySelector("#infoform")
let valid = document.querySelector(".valide")
let link = document.querySelector("#link")




file.addEventListener("change",(e)=>{
    let src = e.target.files[0]
    if(src){
        let r = new FileReader()
        r.readAsDataURL(src)
        r.onload=(e)=>{
            imgdiv.src = e.target.result
        }
    }
})



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(name.value.trim() == "" || text.value == "" || info.value == "" || file.files.length === 0){
        alert("doldur")
    }
    else{
        axios.post(url,{
            img:imgdiv.src,
            name:name.value,
            map:link.value,
            location:text.value,
            info:info.value,
        })
    }
})





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


let user1 = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

if (user) {
    document.querySelector(".userh1").textContent =`${user1.title}`;
    document.querySelector(".useremail").textContent=`${user1.email}`
}

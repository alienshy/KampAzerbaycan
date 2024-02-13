
// let userh1 = document.querySelector(".userh1")
// let useremail = document.querySelector(".useremail");
// let person = document.querySelector(".bi-person-circle")

// let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;
// if(user){
//   userh1.innerHTML = `${user.title}`
//   useremail.innerHTML = `${user.email}`

// }

let url = "http://localhost:3000/admin/"

let form = document.querySelector("form")
let file = document.querySelector("#file")
let imgdiv = document.querySelector(".divimg img")
let name = document.querySelector("#bolge")
let text = document.querySelector("#mekan")
let info = document.querySelector("#infoform")
let valid = document.querySelector(".valide")


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
    if(name.value.trim() == "" || text.value == "" || file.files.length === 0){
        alert("doldur")
    }
    else{
        axios.post(url,{
            img:imgdiv.src,
            name:name.value,
            location:text.value,
            info:info.value,
        })
    }
})









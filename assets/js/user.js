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


let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

if (user) {
    document.querySelector(".userh1").textContent =`${user.title}`;
    document.querySelector(".useremail").textContent=`${user.email}`
}




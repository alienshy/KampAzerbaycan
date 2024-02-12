///////url////
let url = "http://localhost:3000/maps"





//////MENU/////
let menu = document.querySelector("menu")
document.querySelector(".bi-list").addEventListener("click",()=>{
    // document.querySelector("menu").style.display = "flex";
    // document.querySelector(".bi-list").style.display = "none";
    if (!menu.classList.contains("show")) {
        menu.classList.add("show")
    }

})
document.querySelector(".bi-x").addEventListener("click",()=>{
    // document.querySelector("menu").style.display = "none";
    // document.querySelector(".bi-list").style.display = "flex";
    if (menu.classList.contains("show")) {
        menu.classList.remove("show")
    }
})
window.addEventListener("resize",()=>{
    if(window.innerWidth > 1300){
        // document.querySelector("menu").style.display = "none";
            menu.classList.remove("show");
        document.querySelector(".bi-list").style.display = "none";
    }
    else{
        document.querySelector(".bi-list").style.display = "flex";
        menu.classList.add("remove")
    }
})

// let search = document.querySelector("#search")



////////////ADD/////////

let card = document.querySelector("#maincon")
let sort = document.querySelector("#sort")
let search = document.querySelector("#mainsearch");
console.log(search);
let filter = []
let copy = []


async function getall(){
    let res = await axios.get(url)
    let data = await res.data
    copy = data
    card.innerHTML=""
    filter = filter.length || (search && search.value) ? filter : data;
filter.forEach(element => {
    card.innerHTML+=`
    <div class="cards">
    <div class="cardsimg">
      <img src="${element.img}" alt=""/>
    </div>
    <h3 class="cardsname">${element.name}</h3>
    <span
      ><i class="bi bi-geo-alt-fill"></i>
      <h4 class="cardslocation">${element.location}</h4></span
    >
    <iframe
      src="${element.map}"
      width="100%"
      height="200px"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
   <a href="./details.htm?id=${element.id}" class="details"> <button>
   <i  class="bi bi-arrow-right-circle-fill"></i>Learn More 
    </button></a>
  </div>
    `
});
}
getall()


//////////////SORT///////
sort.addEventListener("change",(e)=>{
  if(e.target.value == "a-z"){
      filter.sort((a,b)=>a.name.localeCompare(b.name))
  }
  else if(e.target.value == "z-a"){
      filter.sort((a,b)=>b.name.localeCompare(a.name))
  }
  else{
      filter = copy
  }
  getall()
})



/////////SEARCH//////
search.addEventListener("input",(e)=>{
  filter = copy
  filter = filter.filter((y)=>{
      return y.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  })
  getall()
})




/////////GIRIS?///////
// let gir = document.querySelector(".gir");
// let qeyd = document.querySelector(".qeyd");
// let person = document.querySelector(".bi-person-circle")

// let logout = document.querySelector("#trash");

// let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;
// if(user){
//   gir.innerHTML = `${user}`
//   logout.style.display = "block";
//   person.style.display = "block"
//   qeyd.style.display = "none";
// }
// logout.addEventListener("click",()=>{
//   localStorage.removeItem('currentUser');
//   logout.style.display = "none"
//   gir.innerHTML = "Giriş";
//   person.style.display = "none"
//   qeyd.style.display = "block";
// })



//////modaldiv////
let modalclick = document.querySelector(".bi-caret-right-fill");
let modaldiv = document.querySelector(".modal");
modalclick.addEventListener("click",()=>{
  setTimeout(() => {
    modaldiv.style.display = "flex";
  }, 200);
})
window.addEventListener("click",()=>{
  modaldiv.style.display = "none";
})
window.addEventListener("resize",()=>{
  if(window.innerWidth < 786){
    modaldiv.style.display = "none";
  }
})



////////say1/////
const say = function(value, interval) {
  function sayiyiArtir() {
      let sayim1 = document.querySelector(".sayim1");
      let sayi = 0;
      function artir() {
          sayim1.innerHTML = sayi;
          sayi += 3;
          if (sayi <= value) {
              setTimeout(artir, interval);
          }
      }
      artir(); 
  }
  sayiyiArtir();
};
say(3434, 0.001);




//////say2///////
const say2 = function(value, interval) {
  function sayiyiArtir() {
      let sayim2 = document.querySelector(".sayim2");
      let sayi = 0;
      function artir() {
          sayim2.innerHTML = sayi;
          sayi += 3;
          if (sayi <= value) {
              setTimeout(artir, interval);
          }
      }
      artir(); 
  }
  sayiyiArtir();
};
say2(2344, 0.001);




///////say3///////
const say3 = function(value, interval) {
  function sayiyiArtir() {
      let sayim3 = document.querySelector(".sayim3");
      let sayi = 0;
      function artir() {
          sayim3.innerHTML = sayi;
          sayi += 3;
          if (sayi <= value) {
              setTimeout(artir, interval);
          }
      }
      artir(); 
  }
  sayiyiArtir();
};
say3(1867, 0.001);

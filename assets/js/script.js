///////url////
let url = "http://localhost:3000/maps"





//////MENU/////
let menu = document.querySelector("menu")
document.querySelector(".bi-list").addEventListener("click",()=>{

    if (!menu.classList.contains("show")) {
        menu.classList.add("show")
    }

})
document.querySelector(".bi-x").addEventListener("click",()=>{

    if (menu.classList.contains("show")) {
        menu.classList.remove("show")
    }
})
window.addEventListener("resize",()=>{
    if(window.innerWidth > 1300){
            menu.classList.remove("show");
        document.querySelector(".bi-list").style.display = "none";
    }
    else{
        document.querySelector(".bi-list").style.display = "flex";
        menu.classList.add("remove")
    }
})




////////////ADD/////////

let card = document.querySelector("#maincon")
let sort = document.querySelector("#sort")
let search = document.querySelector("#mainsearch");
let maxl = 3;
let filter = []
let copy = []


async function getall(){
    let res = await axios.get(url)
    let data = await res.data
    copy = data
    card.innerHTML=""
    filter = filter.length || (search && search.value) ? filter : data;
     filter.slice(0,maxl).forEach(element => {
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



let load = document.querySelector("#load")
let show = document.querySelector("#show")


load.addEventListener("click",()=>{
  math2()
  maxl += 3;
  getall()
})
show.addEventListener("click",()=>{
  math1()
  getall()
})

function math1(){
  if(maxl>3){
    show.style.display = "flex"
    maxl -= 3;

  }
  if(maxl =3){
    show.style.display = "none"
    load.style.display = "flex"
  }
}
function math2(){
  if(show.style.display = "none"){
    show.style.display = "flex"
  }
  if(maxl >= copy.length){
    load.style.display = "none"
  }
}





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



let url = "http://localhost:3000/maps"



//////menu/////
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





let card = document.querySelector("#maincon")
let sort = document.querySelector("#sort")
let search = document.getElementById("search");
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
    <button>
      <i class="bi bi-arrow-right-circle-fill"></i>Learn More
    </button>
  </div>
    `
});
}
getall()
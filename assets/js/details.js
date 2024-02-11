let id= new URLSearchParams (window.location.search).get("id");
let det = document.querySelector(".details");
;

async function getCardById(id){
    let res = await axios.get(url + id);
    let element= await res.data

    det.innerHTML =
    `
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
   <a href="./details.htm?id=${element.id} class="details"><i  class="bi bi-arrow-right-circle-fill"></i>Learn More </a>
    </button>
  </div>
    `
}
getCardById(id);
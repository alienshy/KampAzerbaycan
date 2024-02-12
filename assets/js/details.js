let id = new URLSearchParams(window.location.search).get("id");
let det = document.querySelector(".maincon");
let url1 = "http://localhost:3000/maps/";

async function getCardById(id) {
  let res = await axios.get(url1 + id);
  let element = await res.data;
  console.log(element);
  det.innerHTML = `
    <div class="cards">
    <div class="cardsimg">
      <img src="${element.img}" alt=""/>
    </div>
    <iframe
      src="${element.map}"
      width="100%"
      height="400px"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    >
    </iframe> </div>
   <div class="textdetails"> <h3 class="cardsname">${element.name}</h3>
    <span
      ><i class="bi bi-geo-alt-fill"></i>
      <h4 class="cardslocation">${element.location}</h4>
      </span
    > 
    <p>${element.info}</p>
<div class="detailsmap">
</div>
  </div>
    `;
}
getCardById(id);

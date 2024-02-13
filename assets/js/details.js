let id = new URLSearchParams(window.location.search).get("id");
let det = document.querySelector(".maincon");
let url1 = "http://localhost:3000/maps/";

async function getCardById(id) {
  let res = await axios.get(url1 + id);
  let element = await res.data;
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

////////////comment/////
let comment_author = document.querySelector("#comment_author")
let email = document.querySelector("#email")
let comment = document.querySelector("#comment")
let form = document.querySelector("form")
console.log(comment_author);
form.addEventListener("submit",async (e)=>{
  e.preventDefault()
  console.log("t5e7");

  let res = await axios.get(url1 + id);
  let element = await res.data;
  let obj = {
    name:comment_author.value,
    email:email.value,
    comment:comment.value
  }
  element.comments.push(obj)
  axios.patch(url1+id,element)
})






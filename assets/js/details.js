let id = new URLSearchParams(window.location.search).get("id");
let det = document.querySelector(".maincondet");
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
      </iframe>
    </div>
    <div class="textdetails">
      <h3 class="cardsname">${element.name}</h3>
      <span>
        <i class="bi bi-geo-alt-fill"></i>
        <h4 class="cardslocation">${element.location}</h4>
      </span>
      <p>${element.info}</p>
      <div class="detailsmap"></div>
    </div>
  `;
}

getCardById(id);

let commentsId = new URLSearchParams(window.location.search).get("id");
let allCommentsContainer = document.querySelector("#allCommentsContainer");
let url3 = "http://localhost:3000/maps/";

async function getCommentsById(commentsId) {
  let res = await axios.get(url3 + commentsId);
  let cardData = await res.data;
  if (cardData.comments && cardData.comments.length > 0) {
    cardData.comments.forEach(comment => {
      allCommentsContainer.innerHTML += `
      <div class="comment" style="display:flex; flex-direction:column; width:100%; border:2px dashed green; padding:10px; border-radius:20px;">
      <div class="usericons" style="display:flex; width:100%;">
      <i class="bi bi-person-hearts" style="font-size: 50px; color:#66b400">
      </i>
          <div class="textcomments" style="display: flex; flex-direction: column; width: 100%; padding: 10px;">
        <h6 style="color:#66b400; font-size: 20px;">${comment.name}</h6>
        <h6 style="color:black;">${comment.email}</h6>
  </div>
      </div>
  <p>${comment.comment}</p>
      </div>
      `;
    });
  }
}

getCommentsById(commentsId);



////////////comment/////
let comment_author = document.querySelector("#comment_author")
let email = document.querySelector("#email")
let comment = document.querySelector("#comment")
let form = document.querySelector("form")
console.log(comment_author);
form.addEventListener("submit", async (e) => {
  e.preventDefault()

  let res = await axios.get(url1 + id);
  let element = await res.data;
  let obj = {
    name: comment_author.value,
    email: email.value,
    comment: comment.value
  }
  element.comments.push(obj)
  axios.patch(url1 + id, element)
})








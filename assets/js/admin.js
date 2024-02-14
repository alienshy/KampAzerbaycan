let url = "http://localhost:3000/maps/";

let tbody = document.querySelector(".admintable table tbody")

async function getadmindata(){
    try{
        const res = await axios.get(url)
        const data = res.data 
        tbody.innerHTML=""
        data.forEach(element => {
            tbody.innerHTML+=`
            <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.location}</td>
            <td><i class="bi bi-geo-alt-fill"><p>${element.map}</p></i></td>
            <td><i class="bi bi-trash" onclick="deletedataid(${element.id})"></i></td>
        </tr>
            `
        });
    }
    catch(error){
        console.log("ERROR 404 Not defined");
    }
}
getadmindata()


async function deletedataid(id){
try{
    await axios.delete(url + id)
    await getadmindata()
}
catch(error){
    console.log("ERROR 404 Not defined");
}
}


/////////user add/////
let url2 = "http://localhost:3000/admin/";


let admindiv = document.querySelector(".adminsection")


async function alladmindata(){
    try{
        const res = await axios.get(url2)
        const data = res.data 
        admindiv.innerHTML=""
        data.forEach(element => {
            admindiv.innerHTML+=`
            <div class="admindiv">
            <div class="adminsectionimg">
            <img src="${element.img}" alt=""/>
            </div>
            <div class="admintextdiv">
            <h1>${element.name}</h1>
            <h3>${element.location}</h3>
            <p>${element.info}</p>
            <p>${element.map}</p>
            </div>
          </div>
          <div class="buttonadmin">
          <button class="deleteadmininnfo" onclick="deleteuser(${element.id})">Sil</button>
          <button class="addtotable" onclick="sendThisData(${element.id})">elave et</button></div>
        </div>
            `
        });
    }
    catch(error){
        console.log("ERROR 404 Not defined");
    }
}
alladmindata()


async function deleteuser(id){
    try{
        await axios.delete(url2 + id)
        await alladmindata()
    }
    catch(error){
        console.log("ERROR 404 Not defined");
    }
    }

async function sendThisData(id){
    try{
        let res = await axios.get(url2 + id)
        let data = await res.data
        await axios.post(url, {
            name: data.name,
            img: data.img,
            location: data.location,
            info: data.info,
            map: data.map
        })
        await axios.delete(url2 + id)
    } catch(error){
        console.log("error");
    }
}
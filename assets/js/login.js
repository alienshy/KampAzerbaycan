let user = localStorage.getItem('currentUser');
let form2 = document.querySelector(".form2");

form2.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.querySelector("#loginEmail").value;
    let password = document.querySelector("#loginPassword").value;

    fetch('http://localhost:3000/user')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Kullanıcı verileri getirilemedi');
            }
        })
        .then(data => {
            let currentUserInfo = data.find((userData) => email === userData.email);


            if (currentUserInfo) {
                if (currentUserInfo.password === password) {
                    localStorage.setItem('currentUser', JSON.stringify(currentUserInfo));
                    window.location = "./index.htm";
                } else {
                    alert("Şifre yanlış");
                }
            } else {
                alert("Kullanıcı bulunamadı");
            }
        })
        .catch(error => {
            console.error(error);
            alert("Bir hata oluştu. Lütfen tekrar deneyin.");
        });
});

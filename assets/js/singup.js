function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };
    const userJson = JSON.stringify(user);

    console.log('Registered user:', userJson);

    // Burada kayıt işleminden sonra, istediğiniz sayfaya yönlendirebilirsiniz.
    // Örneğin, ana sayfaya yönlendirebilirsiniz:
    // window.location.href = "index.html";
}
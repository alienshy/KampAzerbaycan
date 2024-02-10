function login() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Bu noktada, kayıtlı kullanıcıları içeren bir veritabanını kontrol edebilirsiniz.
    // Örneğin, daha önce kaydedilen kullanıcı bilgilerini içeren bir JSON nesnesi varsa,
    // bu bilgileri kontrol edebilirsiniz.

    // Örneğin:
    const storedUserJson = '{"name":"John Doe","email":"john@example.com","password":"password123"}';

    const storedUser = JSON.parse(storedUserJson);

    if (loginEmail === storedUser.email && loginPassword === storedUser.password) {
        alert('Login successful!');
        // Burada giriş başarılıysa, istediğiniz işlemleri gerçekleştirebilirsiniz.
        // Örneğin, ana sayfaya yönlendirebilirsiniz.
        // window.location.href = "index.html";
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
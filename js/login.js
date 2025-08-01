// Login Form logic

const loginButton = document.getElementById('loginButton');

const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');

loginButton.addEventListener('click', async function() {

    const email = inputEmail.value;
    const password = inputPassword.value;

    await login(email, password);
});

async function login(email, password) {
    const body = {
        email: email,
        password: password,
    };

    const response = await fetch('http://localhost:8080/admins/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    });

    if (response.ok) {

        const data = await response.json();

        localStorage.setItem("JWT", data.token);
    } else {
        alert("Login failed");
    }
}
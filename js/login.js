// Login Form logic

const jwtToken = localStorage.getItem("JWT");

if (jwtToken) {
    // When JWT token is set - redirect to /dashboard.html
    location.href = "/dashboard.html";
}

const loginButton = document.getElementById("loginButton");

const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");

loginButton.addEventListener("click", async function() {

    const email = inputEmail.value;
    const password = inputPassword.value;

    await login(email, password);
});

async function login(email, password) {
    const body = {
        email: email,
        password: password,
    };

    const response = await fetch("https://loyalty-card-backend.onrender.com/admins/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });

    if (response.ok) {

        const data = await response.json();

        localStorage.setItem("JWT", data.token);

        location.href = "/dashboard.html";
    } else {
        alert("Login failed");
    }
}
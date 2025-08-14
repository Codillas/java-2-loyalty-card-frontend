const navbarToggler = document.querySelector("#navbarToggler");
const navbarSupportedContent = document.getElementById("navbarSupportedContent");

navbarToggler.addEventListener("click", function() {
    navbarSupportedContent.classList.toggle("show");
});

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", function() {
    // LOGOUT!!! We remove JWT from localStorage
    localStorage.removeItem("JWT");
    location.href = "/auth/login.html";
});

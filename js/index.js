const jwtToken = localStorage.getItem("JWT");

if (jwtToken) {
    // When JWT token is set - redirect to /dashboard.html
    location.href = "/dashboard.html";
}
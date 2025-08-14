
const jwtToken = localStorage.getItem("JWT");

if (!jwtToken) {
    // When JWT token is not set - redirect to /auth/login.html
    location.href = "/auth/login.html";
}

// Analyze JWT token (check role and expiration date)
// If invalid => remove from localStorage and redirect user to /auth/login.html

async function getAdmins(jwt) {

    const response = await fetch("https://loyalty-card-backend.onrender.com/admins", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`
        }
    });

    if (response.ok) {

        const data = await response.json();

        const adminTable = document.getElementById("admin-table");

        data.forEach(function(admin) {
            const tr = `
                <tr>
                    <td>${admin.id}</td>
                    <td>${admin.email}</td>
                    <td>${admin.first_name}</td>
                    <td>${admin.last_name}</td>
                </tr>
            `;

            adminTable.innerHTML = adminTable.innerHTML + tr;
        });
    } else {
        alert("Incorrect token");
        // LOGOUT!!! We remove JWT from localStorage
        localStorage.removeItem("JWT");
        location.href = "/auth/login.html";
    }
}

getAdmins(jwtToken);


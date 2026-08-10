// TRANZO Admin Guard

// Check Login Session

const isAdminLoggedIn = localStorage.getItem("adminLoggedIn");

// If not logged in, redirect

if (isAdminLoggedIn !== "true") {

    alert("Please login as Admin first!");

    window.location.href = "admin-login.html";

}

// Logout Function

function adminLogout() {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        localStorage.removeItem("adminLoggedIn");

        localStorage.removeItem("adminEmail");

        window.location.href = "admin-login.html";

    }

}
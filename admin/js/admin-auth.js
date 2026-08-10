// TRANZO Admin Authentication

// Fixed Admin Credentials

const ADMIN_EMAIL = "admin1@gmail.com";
const ADMIN_PASSWORD = "00002222";

// Elements

const loginForm = document.getElementById("adminLoginForm");
const emailInput = document.getElementById("adminEmail");
const passwordInput = document.getElementById("adminPassword");
const errorBox = document.getElementById("loginError");
const togglePassword = document.getElementById("togglePassword");

// Show / Hide Password

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    }

    else {

        passwordInput.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});

// Login

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();


    if (email === ADMIN_EMAIL &&
        password === ADMIN_PASSWORD) {

        // Save Login Session

        localStorage.setItem("adminLoggedIn", "true");

        localStorage.setItem("adminEmail", email);

        // Redirect

        window.location.href = "admin-dashboard.html";

    }

    else {

        errorBox.classList.remove("hidden");

        passwordInput.value = "";

        passwordInput.focus();

    }

});
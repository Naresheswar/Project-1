document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let usertype = document.getElementById("usertype").value;

    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
    let usertypeError = document.getElementById("usertypeError");

    usernameError.textContent = "";
    passwordError.textContent = "";
    usertypeError.textContent = "";

    let valid = true;

    if (username === "") {
        usernameError.textContent = "Username is required";
        valid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    }

    if (usertype === "") {
        usertypeError.textContent = "Please select a user type";
        valid = false;
    }

    if (valid) {
        if (username === "admin" && password === "123456" && usertype === "admin") {
            localStorage.setItem("loggedUser", username);
            window.location.href = "dashboard1.html";
        } else {
            passwordError.textContent = "Invalid login credentials";
        }
    }
});

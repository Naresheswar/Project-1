document.getElementById("regForm").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let age = document.getElementById("age").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if (name === "" || email === "" || password === "" || confirmPassword === "" || age === "") {
        errorMsg.textContent = "All fields are required!";
        event.preventDefault();
        return;
    }

    if (password.length < 8) {
        errorMsg.textContent = "Password must be at least 8 characters long!";
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match!";
        event.preventDefault();
        return;
    }

    if (isNaN(age) || age < 18) {
        errorMsg.textContent = "Age must be a number and at least 18!";
        event.preventDefault();
        return;
    }

    alert("Registration Successful!");
});

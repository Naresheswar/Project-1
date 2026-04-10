document.getElementById("examForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let subjects = document.querySelectorAll('input[name="subject"]:checked');
    let declaration = document.getElementById("declaration").checked;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("subjectError").textContent = "";
    document.getElementById("declarationError").textContent = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Please select a gender";
        valid = false;
    }

    if (subjects.length === 0) {
        document.getElementById("subjectError").textContent = "Select at least one subject";
        valid = false;
    }

    if (!declaration) {
        document.getElementById("declarationError").textContent = "You must accept the declaration";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
        document.getElementById("examForm").submit();
    }
});

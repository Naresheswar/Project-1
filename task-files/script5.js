document.getElementById("hotelForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let guestName = document.getElementById("guestName").value.trim();
    let contactNumber = document.getElementById("contactNumber").value.trim();
    let roomType = document.querySelector('input[name="roomType"]:checked');
    let services = document.querySelectorAll('input[name="service"]:checked');
    let terms = document.getElementById("terms").checked;

    document.getElementById("nameError").textContent = "";
    document.getElementById("contactError").textContent = "";
    document.getElementById("roomError").textContent = "";
    document.getElementById("serviceError").textContent = "";
    document.getElementById("termsError").textContent = "";

    let valid = true;

    if (guestName === "") {
        document.getElementById("nameError").textContent = "Guest name is required";
        valid = false;
    }

    if (contactNumber === "") {
        document.getElementById("contactError").textContent = "Contact number is required";
        valid = false;
    }

    if (!roomType) {
        document.getElementById("roomError").textContent = "Select a room type";
        valid = false;
    }

    if (services.length === 0) {
        document.getElementById("serviceError").textContent = "Select at least one additional service";
        valid = false;
    }

    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms and conditions";
        valid = false;
    }

    if (valid) {
        alert("Booking Successful!");
        document.getElementById("hotelForm").submit();
    }
});

document.getElementById("checkoutForm").addEventListener("submit", function(event) {

    let fullname = document.getElementById("fullname").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let zip = document.getElementById("zip").value.trim();
    let payment = document.getElementById("payment").value;
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    let phonePattern = /^[0-9]{10}$/;
    let zipPattern = /^[0-9]{5,6}$/;

    if (fullname === "" || phone === "" || address === "" || zip === "") {
        errorMsg.textContent = "All fields are required!";
        event.preventDefault();
        return;
    }

    if (!phonePattern.test(phone)) {
        errorMsg.textContent = "Phone number must contain exactly 10 digits!";
        event.preventDefault();
        return;
    }

    if (!zipPattern.test(zip)) {
        errorMsg.textContent = "Invalid ZIP / Postal Code format!";
        event.preventDefault();
        return;
    }

    if (payment === "") {
        errorMsg.textContent = "Please select a payment option!";
        event.preventDefault();
        return;
    }

    alert("Order Placed Successfully!");
});

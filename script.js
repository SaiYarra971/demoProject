document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy validation
    if (username === "yarra sai" && password === "yarrasai@123") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials!");
    }
});
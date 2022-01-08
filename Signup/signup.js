let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");

function register() {
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left = "110px"
}

function login() {
    x.style.left = "50px"
    y.style.left = "450px"
    z.style.left = "0"
}

function validation() {
    let mail = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (mail === "pmarkovic2308@gmail.com" && password === "12345") {
        alert('Logged in successfully');
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    } else {
        alert('Incorrect email or password!')
    }
}
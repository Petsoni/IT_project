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

function registerValidation() {
    let usernameReg = document.getElementById("usernameReg").value;
    let mailReg = document.getElementById("emailReg").value;
    let passwordReg = document.getElementById("passwordReg").value;

    if (usernameReg === "" || mailReg === "" || passwordReg === "") {
        alert('Fill out all the necessary fields!!!');
    } else {
        alert('Registered successfully');
        document.getElementById('usernameReg').value = "";
        document.getElementById('emailReg').value = "";
        document.getElementById('passwordReg').value = "";
    }
}
const INVALID_EMAIL = 'Email invalid !';
const INPUT_REQUIRED = 'Campul este obligatoriu';
const INPUT_MINIM = 'Campul trebuie sa contina cel putin 2 caractere';
const INPUT_UPPERCASE = 'Campul trebuie sa inceapa cu o majuscula';
const INVALID_PASSWORD = 'Parola trebuie sa aibe sa contina .....';
const INVALID_LOGIN = 'Datele de logare nu sunt bune';

//adauga useri la inregistrare
function addUser(userDetails) {
    let users = JSON.parse(localStorage.getItem('users') || "[]");

    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users));
}

function fetchUser(email) {
    let user = {};

    let users = JSON.parse(localStorage.getItem('users') || "[]");
    if (users.length !== 0) {
        user = users.find(e => e.email === email);
    }

    return user;
}

function fetchUserLogin() {
    let email = localStorage.getItem("userLogin");

    return fetchUser(email);
}

function appendUserDetails() {
    let user = fetchUserLogin();
    if (user !== undefined) {
        let text = user.fistName + ' ' + user.lastName;
        let userContainer = document.getElementById('user-container');
        
        if (userContainer !== null) {
            userContainer.append(text);
            document.getElementById('user-login-details').classList.add('display-none');
            document.getElementById('user-logout').classList.remove('display-none');
        }
    }
}

function checkUserLogIn(){
    let user = fetchUserLogin();
    if (user === undefined) {
        window.location.href = 'index.html'
    }
}

function logout(){
    localStorage.removeItem('userLogin');
    window.location.href = 'index.html'
}

function addToCart(){
    let user = fetchUserLogin();
    if (user !== undefined) {
       console.log(user);
    }
}

function addInputMessage(input, message) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
}

function removeInputMessage(input) {
    const msg = input.parentNode.querySelector("small");

    msg.innerText = '';
}

function isInputEmpty(input) {
    return input.value === "";
}

function validateEmail(input) {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    return isInputEmpty(input) || emailRegex.test(input);
}

function validatePassword(input) {
    //Minimum eight characters, at least one letter, one number and one special character
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;

    return isInputEmpty(input) || passwordRegex.test(input);
}

///////////////////////
// checkUserLogIn();
appendUserDetails();
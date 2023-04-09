let usernameElement = document.getElementById("username")
let passwordElement = document.getElementById("password");
let loginButtonElement = document.getElementById("login-button");

passwordElement.addEventListener('blur',
    () => {
        let password = passwordElement.value;
        if (password.length < 6) {
            document.getElementById("message").style.display = "block";
        } else {
            document.getElementById("message").style.display = "none";
        }
    }
)

let formElement = document.getElementById("login-form");
formElement.addEventListener('focusout', () => {
    console.log('focusout')
    let username = usernameElement.value;
    let password = passwordElement.value;

    if (isValidUsername(username) && isValidPassword(password)) {
        loginButtonElement.disabled = false;
        loginButtonElement.classList.remove("disabled")
    } else {
        loginButtonElement.disabled = true;
        loginButtonElement.classList.add("disabled")
    }
})


let isValidUsername = username => username.length > 0
let isValidPassword = password => password.length >= 6


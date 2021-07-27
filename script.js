const form = document.getElementById("form");
const firstName = document.querySelectorAll(".first-name");
const lastName = document.querySelectorAll(".last-name");
const email = document.querySelectorAll(".email");
const password = document.querySelectorAll(".password");
const inputs = [firstName, lastName, email, password];
var isValid = true;

form.addEventListener("submit", event => {
    isValid = true;

    inputs.forEach(input => {
        if(input[0].value.length == 0) {
            isValid = false;
            input[0].classList.add("input-error");
            input[1].classList.remove("hide");
            input[2].classList.remove("hide");
        } else {
            input[0].classList.remove("input-error");
            input[1].classList.add("hide");
            input[2].classList.add("hide");
        }
    });

    if(!email[0].validity.valid) {
        isValid = false;
        email[2].textContent = "Looks like this is not an email";
        email[1].classList.remove("hide");
        email[2].classList.remove("hide");
    }

    if(!isValid) {
        event.preventDefault();
    }
});


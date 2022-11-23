let passInput = document.getElementById("pass");
let confirmPassInput = document.getElementById("confirmPass");

const validatePassword = () => {
    if(passInput.value != confirmPassInput.value) {
        confirmPassInput.setCustomValidity("Passwords do not match!");
    } else {
        confirmPassInput.setCustomValidity("");
    }
}

passInput.onchange = validatePassword;
confirmPassInput.onkeyup = validatePassword;
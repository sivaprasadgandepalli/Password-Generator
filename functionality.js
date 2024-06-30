let password_field = document.getElementById("Password");
const copyBtn = document.getElementById("copy_btn");
const rangeSlider = document.getElementById("length");
const length_display = document.getElementById("choosen_length");
const Upper_checkbox = document.getElementById("upper");
const Lower_checkbox = document.getElementById("lower");
const Numbers_checkbox = document.getElementById("number");
const Symbols_checkbox = document.getElementById("symbols");
const indication_levels = document.querySelectorAll(".indicator>span");
const generate_btn = document.querySelector(".generate-btn");

generate_btn.addEventListener("click", getInputsfromUser);
rangeSlider.addEventListener("change", () => {
    length_display.textContent = rangeSlider.value;
})

copyBtn.addEventListener("click", copyToClipboard);

function getInputsfromUser() {
    const upper_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower_letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#$%&*_";
    const choosenLength = rangeSlider.value;
    let strength = 0;
    let source = '';
    if (Upper_checkbox.checked) {
        source += upper_letters;
        strength++;
    }
    if (Lower_checkbox.checked) {
        source += lower_letters;
        strength++;
    }
    if (Numbers_checkbox.checked) {
        source += numbers;
        strength++;
    }
    if (Symbols_checkbox.checked) {
        source += symbols;
        strength++;
    }
    if (source != "" && choosenLength != 0) {
        console.log(choosenLength, source, strength);
        generateRandomPassword(choosenLength, source, strength);
    }
    else {
        alert("Please provide all the necessary inputs");
    }
}

function generateRandomPassword(length, source, strength) {
    let Password = '';
    const colors = ["red", "orange", "yellow", "aquamarine"];
    for (let i = 0; i < length; i++) {
        const random_character = Math.floor(Math.random() * source.length);
        Password += source[random_character];
    }
    for (let i = 0; i < strength; i++) {
        indication_levels[i].style.background = `${colors[strength - 1]}`;
    }
    password_field.value = Password;
}

function copyToClipboard() {
    if (password_field.value) {
        navigator.clipboard.writeText(password_field.value).then(() => {
            alert("text copied!");
        })
            .catch((e) => { console.log(e); })
    }
}


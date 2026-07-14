/*  task 1  
 const title = document.getElementById("title");

title.addEventListener("mouseover", function () {
    title.style.backgroundColor = "yellow";
    title.style.fontWeight = "bold";
});

title.addEventListener("mouseout", function () {
    title.style.backgroundColor = "";
    title.style.fontWeight = "normal";
}); 

task 2

const countries = document.getElementById("countries");
const flag = document.getElementById("flag");

countries.addEventListener("change", function () {

    if (countries.value === "Palestine") {
        flag.src = "images/download.webp";
    }
    
    else if (countries.value === "france") {
        flag.src = "images/france.png";
    }
    else if (countries.value === "japan") {
        flag.src = "images/japan.png";
    }
    else {
        flag.src = "";
    }

});

task 3

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

function checkPassword() {

    if (password.value.length < 6) {
        message.textContent = "Password is too short";
        message.style.color = "red";
    }
    else if (password.value !== confirmPassword.value) {
        message.textContent = "Passwords do not match";
        message.style.color = "red";
    }
    else {
        message.textContent = "Passwords match";
        message.style.color = "green";
    }

}
password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword);


task 4
const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", function () {

    if (text.style.display === "none") {
        text.style.display = "block";
        btn.textContent = "Hide";
    } else {
        text.style.display = "none";
        btn.textContent = "Show";
    }

});


task 5


let textBox = document.getElementById("textBox");

let fontFamily = document.getElementById("fontFamily");
let fontSize = document.getElementById("fontSize");

let italic = document.getElementById("italic");
let bold = document.getElementById("bold");
let underline = document.getElementById("underline");

fontFamily.onchange = function () {
    textBox.style.fontFamily = fontFamily.value;
};

fontSize.onchange = function () {
    textBox.style.fontSize = fontSize.value;
};

italic.onclick = function () {

    if (italic.checked) {
        textBox.style.fontStyle = "italic";
    } else {
        textBox.style.fontStyle = "normal";
    }

};

bold.onclick = function () {

    if (bold.checked) {
        textBox.style.fontWeight = "bold";
    } else {
        textBox.style.fontWeight = "normal";
    }

};

underline.onclick = function () {

    if (underline.checked) {
        textBox.style.textDecoration = "underline";
    } else {
        textBox.style.textDecoration = "none";
    }

};

task 6 
*/ 
let box = document.getElementById("box");
let time = document.getElementById("time");
let start = document.getElementById("start");

start.onclick = function () {

    box.style.animation = "changeColor " + time.value + "s infinite";

};
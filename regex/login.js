const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const storedUser = localStorage.getItem("user");

    const user = JSON.parse(storedUser);

    if (email.value === user.email && password.value === user.password) {

    alert("Login Successful");

} else {

    alert("Invalid Email or Password");

}

    console.log(user);

}); 

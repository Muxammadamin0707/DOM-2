let ism = prompt("Ismingizni kiriting: ");

let h1 = document.createElement("h1");

h1.textContent = ism;

let body = document.querySelector("body")

body.appendChild(h1);

body.style = "color: white; background-color: blue; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, Helvetica, sans-serif;";
h1.style = "font-size: 50px;"
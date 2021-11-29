//Allt som alltid är på sidan

let root = document.getElementById("root");


let nav = document.createElement("nav");
let navLogo = document.createElement("h1");
navLogo.innerText = "LoginPage";
nav.append(navLogo);

let section = document.createElement("section");


let footer = document.createElement("footer");
let footerText1 = document.createElement("p");
footerText1.innerText = "Footertext här";
let footerText2 = document.createElement("p");
footerText2.innerText = "Footertext här också";
footer.append(footerText1, footerText2);

root.append(nav, section, footer);

render();
//Kolla om användaren har janne och test i local storage

//Om jaa (Man är inloggad)

function render() {
    if (localStorage.getItem("userName") === "janne" && localStorage.getItem("passWord") === "test") {
        console.log("inloggad");
    }
    //Man är inte redan inloggad
    else {
        console.log("ej inloggad");

        let inputUsername = document.createElement("input");
        inputUsername.setAttribute("type", "text");
        inputUsername.placeholder = "Username";

        let inputPassword = document.createElement("input");
        inputPassword.setAttribute("type", "disc");
        inputPassword.placeholder = "Password";

        let loginBtn = document.createElement("button");
        loginBtn.innerText = "Log in!";
        loginBtn.addEventListener("click", login);


        nav.append(inputUsername, inputPassword, loginBtn);

        //Om man loggar in
        function login() {

        }
    }
}
//Om Nej (Man är inte inloggad)

//Skapa input värden
//let userName = "janne";
//let passWord = "test";

//I loginrutan
//if(userName==="janne" && passWord==="test"){
   //Man är inloggad 
//}
//else{
//Man skriver ej janne och test
//}
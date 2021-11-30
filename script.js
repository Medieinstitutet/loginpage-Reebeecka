
//Allt som alltid är på sidan

let root = document.getElementById("root");


let nav = document.createElement("nav");
let navLogo = document.createElement("h1");
navLogo.innerText = "MyLogin";
nav.append(navLogo);

let section = document.createElement("section");

let footer = document.createElement("footer");
let footerText1 = document.createElement("p");
footerText1.innerText = "Contact us";
let footerText2 = document.createElement("p");
footerText2.innerText = "name.lastname@medieinsitutet.se";
footer.append(footerText1, footerText2);

root.append(nav, section, footer);

//Kalla på funktion för att ladda dynamiskt innehåll
render();

//Funktion för innehåll
function render() {

    //Kolla om användaren har janne och test i local storage
    if (localStorage.getItem("userName") === "janne" && localStorage.getItem("passWord") === "test" || localStorage.getItem("userName") === "rebecka" && localStorage.getItem("passWord") === "banan" ) {

        //Nu är du inloggad!

        //Rensar innehåll för att kunna lägga dit rätt innehåll
        nav.innerHTML = "";
        section.innerHTML = "";

        //Skapar innehåll som är specifikt när man är inloggad

        //NAV
        let logoutBtn = document.createElement("button");
        logoutBtn.innerText = "Log out!";
        logoutBtn.addEventListener("click", logout);

        //SECTION
        let welcomeLogedin = document.createElement("h1");
        welcomeLogedin.innerText = "Welcome " + localStorage.getItem("userName");

        //Lägger till allt innnehåll som ska finnas i denna VY
        nav.append(navLogo, logoutBtn);
        section.append(welcomeLogedin);

        //Trycker på logga ut; ta bort local storage och kör render() igen
        function logout() {
            localStorage.removeItem("userName");
            localStorage.removeItem("passWord");
            render();
        }
    }


    else {
        //Du är inte inloggad

        //Rensar innehåll för att kunna lägga dit rätt innehåll
        nav.innerHTML = "";
        section.innerHTML = "";

        //Skapar innehåll som är specifikt när man inte är inloggad

        //NAV
        let inputUsername = document.createElement("input");
        inputUsername.setAttribute("type", "text");
        inputUsername.placeholder = "Username";

        let inputPassword = document.createElement("input");
        inputPassword.setAttribute("type", "disc");
        inputPassword.placeholder = "Password";

        let loginBtn = document.createElement("button");
        loginBtn.innerText = "Log in!";
        loginBtn.addEventListener("click", login);

        //SECTION
        let welcomeFirst = document.createElement("h1")
        welcomeFirst.innerText = "Welcome!";

        let welcomeText = document.createElement("p")
        welcomeText.innerText = "Login for more fun!";

        //Lägger till allt innnehåll som ska finnas i denna VY
        nav.append(navLogo, inputUsername, inputPassword, loginBtn);
        section.append(welcomeFirst, welcomeText);


        //När man trycker på loggin knapp
        function login() {

            //Konverterar input till värde
            let userName = inputUsername.value;
            let passWord = inputPassword.value;

            //Kollar om värden är rätt
            if (userName === "janne" && passWord === "test" || userName === "rebecka" && passWord === "banan") {
                //Det är rätt, sparar i local storage och kör igenom stora funktionen igen
                localStorage.setItem("userName", userName);
                localStorage.setItem("passWord", passWord);
                render();
            }

            //Om fel kommer till sida för felinlogg
            else {

                //Rensar innehåll för att kunna lägga till rätt
                //Rensar ej Nav i denna då Nav inte ändras
                section.innerHTML = "";

                //Skapar innehåll som är specifikt när man misslyckats med inloggning

                //SECTION
                let failhead = document.createElement("h1");
                failhead.innerText = "Please try again!"
                let failtext = document.createElement("p");
                failtext.innerText = "Try again, but dont try to hack anyone!"

                //Lägger till allt innnehåll som ska finnas i denna VY
                section.append(failhead, failtext);

            }
        }
    }
}
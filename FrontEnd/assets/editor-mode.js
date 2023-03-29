// const header = document.querySelector("header");

const localStorage = sessionStorage.getItem("userOnline");
const logout = document.getElementById("logger");
const filter = document.querySelector(".filter");
const portfolioTitle = document.querySelector(".portfolio-title");
const intro = document.querySelector("#introduction figure")
const modal = document.querySelector(".modal")

/*** Fonction pour generer le mode edition */
const editorMode = () => {

    const editorBar = document.createElement("div");
    editorBar.className = "editor-bar";
    editorBar.innerHTML = "<i class = \" fa-regular fa-pen-to-square \"></i> <p>Mode édition <span>publier les changements</span></p>";
    logout.textContent = "Logout"
    portfolioTitle.innerHTML += "<div class = \"modify\"><i class = \" fa-regular fa-pen-to-square \"></i>Modifier<div>"
    intro.innerHTML += "<div class = \"modify\"><i class = \" fa-regular fa-pen-to-square \"></i>Modifier<div>"
    filter.style.visibility = "hidden"
    document.body.prepend(editorBar)
}




if (localStorage) {
    editorMode();

    logout.addEventListener("click", () => {
        sessionStorage.clear()
    })

    document.querySelectorAll(".modify").forEach(element => {
        element.addEventListener("click",() => {
        modal.style.visibility="visible"
 
    })
    })
}




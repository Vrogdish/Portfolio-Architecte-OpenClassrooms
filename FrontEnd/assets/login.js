import { getTokenFromApi } from "./api.js"

const email = document.getElementById("email")
const password = document.getElementById("password")
const submitBtn = document.getElementById("submit")

let emailInput = ""
let passwordInput = ""

email.addEventListener("input", (e) => {
    emailInput = e.target.value
})

password.addEventListener("input", (e) => {
    passwordInput = e.target.value
})

submitBtn.addEventListener("click",  async (e) => {
    e.preventDefault()
    let user = { "email": emailInput, "password": passwordInput };

    const responseForLogin = await getTokenFromApi(user)
    if (!responseForLogin.ok) {
        alert("Erreur dans l’identifiant ou le mot de passe")

    } else {

    let userOnline = await responseForLogin.json()
  
    sessionStorage.setItem("userOnline" , JSON.stringify(userOnline))
    window.location.href="/FrontEnd/"

    }
})

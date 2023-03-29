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

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    let user = { "email": emailInput, "password": passwordInput };

    let responseForLogin = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(user)
    })

    if (!responseForLogin.ok) {
        alert("Erreur dans l’identifiant ou le mot de passe")

    } else {

    let userOnline = await responseForLogin.json()
    console.log(userOnline)

    sessionStorage.setItem("userOnline" , JSON.stringify(userOnline))
    window.location.href="/FrontEnd/"

    }
})

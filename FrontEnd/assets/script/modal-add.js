import { postToApi, categories } from "./api.js";

const fileZone = document.querySelector(".add-file-zone")
const fileInput = document.getElementById("add-file")
const titleInput = document.getElementById("file-title")
const categorieInput = document.getElementById("file-categorie");
const form = document.forms.namedItem("add-form")

let previewIspresent = false
let imageElement = ""
let imageTitle = ""
let imageCategorie = ""
let file = ""


for (let i in categories) {
    const option = document.createElement("option")
    option.innerText = categories[i].name
    option.value =categories[i].id
    categorieInput.append(option)
}



const displayImage = (url) => {
    
    if (previewIspresent) {
        document.querySelector(".add-file-zone img").remove()
    }

    imageElement = document.createElement("img");
    imageElement.src = url

    fileZone.querySelector("i").style.display = "none"
    fileZone.prepend(imageElement)
    previewIspresent = true
}


fileInput.addEventListener("change", (e) => {

    const fileExtensionRegex = /\.(jpe?g|png)$/i;

    if (e.target.files.lengh === 0 || !fileExtensionRegex.test(e.target.files[0].name)) {
        return;
    }

    file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file)

    displayImage(imageUrl);
    console.log(file)

})


titleInput.addEventListener("input", (e) => {
    imageTitle = e.target.value
})

categorieInput.addEventListener("input", (e) => {
    imageCategorie = e.target.value
})


form.addEventListener("submit", async (e) => {
    e.preventDefault()

    if (!imageTitle | !imageCategorie | !imageElement) {
        alert("Veuillez remplir tous les champs")
        return
    }

    if (file.size > 4194304) {
        alert("Fichier trop volumineux")
        return
    }

    const userOnline = JSON.parse(sessionStorage.getItem("userOnline"))
    const formData = new FormData (form)

     await postToApi(formData, userOnline)

})





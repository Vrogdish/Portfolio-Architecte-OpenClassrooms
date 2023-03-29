import { works } from "./works.js";
const closeModal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const modalAdd = document.querySelector(".modal-add");
const miniGallery = document.querySelector(".miniatures-gallery");
const addBtn = document.querySelector(".modal-wrapper button")

console.log (addBtn)

/** creation des vignettes */

const addMiniature =  (element) => {
const miniatures = document.createElement("div");
const image = document.createElement("div");
image.classList="image";
const imageUrl = document.createElement("img");
imageUrl.setAttribute("src", element.imageUrl)
const text = document.createElement("p");
text.innerText = "éditer";
const icons = document.createElement("div");
icons.classList = "icons";
icons.innerHTML = "<i class=\"fa-solid fa-up-down-left-right\"></i><i class=\"fa-solid fa-trash-can\"></i>";



image.append(icons, imageUrl);
miniatures.append(image, text);
miniGallery.append(miniatures);

}

/** Affichage de la gallery */

for (let i in works) {
    addMiniature(works[i])
}

closeModal.addEventListener("click", () => {


    modal.style.visibility = "hidden";
    modalAdd.style.visibility="hidden";
})

addBtn.addEventListener("click", () => {
    modal.style.visibility = "hidden"
    modalAdd.style.visibility = "visible"
})
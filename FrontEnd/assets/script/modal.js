import { deleteToApi, getWorksFromApi, works } from "./api.js";
import { generateGallery } from "./index.js";
const closeModal = document.querySelectorAll(".close-btn");
const modalMain = document.querySelector(".modal-main");
const modalAdd = document.querySelector(".modal-add");
const miniGallery = document.querySelector(".miniatures-gallery");
const addBtn = document.querySelector(".modal-wrapper button");
export let trash =document.querySelectorAll(".miniatures-gallery .fa-trash-can")
let modalIsOpen = "false";

/** Ouverture de la modale */

if (localStorage) {
  document.querySelectorAll(".modify").forEach((element) => {
    element.addEventListener("click", () => {
      modalMain.style.display = "flex";
      modalAdd.style.display = "none";
      modalIsOpen = true;
    });
  });
}

/**  fonction creation des vignettes */

const addMiniature = (element) => {
  const miniatures = document.createElement("div");
  const image = document.createElement("div");
  image.classList = "image";
  const imageUrl = document.createElement("img");
  imageUrl.setAttribute("src", element.imageUrl);
  const text = document.createElement("p");
  text.innerText = "éditer";
  const icons = document.createElement("div");
  icons.classList = "icons";
  icons.innerHTML =
    '<i class="fa-solid fa-up-down-left-right"></i><i class="fa-solid fa-trash-can"></i>';

  image.append(icons, imageUrl);
  miniatures.append(image, text);
  miniGallery.append(miniatures);
};

/** fonction affichage de la gallery */
export const generateMiniGallery = (elements) => {
  miniGallery.innerHTML = "";
  for (let i in elements) {
    addMiniature(elements[i]);
  }
  trash = document.querySelectorAll(".miniatures-gallery .fa-trash-can")
  for (let i = 0; i < trash.length; i++) {
    trashListener(trash[i], i);
  }
};

// Fonction Suppression de photos

export const trashListener = (element, index) => {
  element.addEventListener("click", async () => {
    const confirmDelete = confirm(
      "Etes vous sûr de vouloir supprimer cette photo ?"
    );
    if (!confirmDelete) {
      return;
    }
    const userOnline = JSON.parse(sessionStorage.getItem("userOnline"));
    let newWorks = await getWorksFromApi();
    await deleteToApi(newWorks[index].id, userOnline);
    newWorks = await getWorksFromApi();

    generateGallery(newWorks);
    generateMiniGallery(newWorks);
   

    // for (let i = 0; i < trash.length; i++) {
    //   trashListener(trash[i], i);
    // }
  });
};



/** fermeture des modales */

Array.from(closeModal).forEach((element) => {
  element.addEventListener("click", () => {
    modalMain.style.display = "none";
    modalAdd.style.display = "none";
    modalIsOpen = false;
  });
});

addBtn.addEventListener("click", () => {
  modalMain.style.display = "none";
  modalAdd.style.display = "flex";
  modalIsOpen = true;
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalMain.style.display = "none";
    modalAdd.style.display = "none";
    modalIsOpen = false;
  }
});

modalMain.addEventListener("click", (e) => {
  if (modalIsOpen && e.target === modalMain) {
    modalMain.style.display = "none";
    modalAdd.style.diplay = "none";
    modalIsOpen = false;
  }
});

modalAdd.addEventListener("click", (e) => {
  if (modalIsOpen && e.target === modalAdd) {
    modalAdd.setAttribute("style", "display : none");
    modalIsOpen = false;
  }
});





generateMiniGallery(works);

// for (let i = 0; i < trash.length; i++) {
//   trashListener(trash[i], i);
// }

/** Récupération des données de l'API */
const reponseForWorks = await fetch("http://localhost:5678/api/works");
export const works = await reponseForWorks.json();

const reponseForCategories = await fetch("http://localhost:5678/api/categories");
const categories = await reponseForCategories.json();


/** Récuperation des emplacements html  */
const gallery = document.querySelector(".gallery");
const filter = document.querySelector(".filter");


/** Creation de la fonction generant la gallerie a afficher */
const generateGallery = (elements) =>  {
    document.querySelector(".gallery").innerHTML = "";
    for (let i in elements) {

        /** Création des balises */
        const figure = document.createElement("figure")
        const image = document.createElement("img");
        const title = document.createElement("figcaption");

        /** Affectation des attributs pour l'image */
        image.setAttribute("src", elements[i].imageUrl);
        image.setAttribute("alt", elements[i].title);

        /** Affectation du texte pour le titre */
        title.innerHTML = elements[i].title;

        /** Rangement des balises dans leurs parents */
        figure.appendChild(image);
        figure.appendChild(title);
        gallery.appendChild(figure);
    }
}

/** fonction pour l affichage des differents filtres */

const generateFilter = (elements) => {
    document.querySelector(".filter").innerHTML = "";
    const buttonAll = document.createElement("button");
    buttonAll.innerHTML = "Tous";
    filter.appendChild(buttonAll);

    for (let i in elements) {
        const button = document.createElement("button");
        button.innerHTML = elements[i].name;
        filter.appendChild(button);
    }
}
/** Affichage des categories et de l ensemble des travaux */

generateFilter(categories);
generateGallery(works);



/** Actions sur les boutons filtres */

const filterButtons = document.querySelectorAll(".filter button");

filterButtons[0].setAttribute("class","btn_active");

for (let i = 0; i < filterButtons.length; i++) {
    
    filterButtons[i].addEventListener("click", function () {

        for (let i = 0; i < filterButtons.length; i++) {
            filterButtons[i].removeAttribute("class", "btn_active");
        }
        
        filterButtons[i].setAttribute("class", "btn_active");
        if (i == 0) {
            generateGallery(works);
        } else {
            const ElementsFiltered = works.filter(element => element.categoryId == i);
            generateGallery(ElementsFiltered)
        }
    })
}



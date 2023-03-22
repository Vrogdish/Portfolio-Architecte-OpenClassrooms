/** Récupération des données de l'API */
const reponse = await fetch("http://localhost:5678/api/works");
const works = await reponse.json();

/** Récuperation de l'emplacement html de la gallerie */
const gallery = document.querySelector(".gallery");


for (let i in works) {

         /** Création des balises */
        const figure = document.createElement("figure")
        const image = document.createElement("img"); 
        const title = document.createElement("figcaption");
 
        /** Affectation des attributs pour l'image */
        image.setAttribute("src", works[i].imageUrl);
        image.setAttribute("alt", works[i].title );
 
        /** Affectation du texte pour le titre */    
        title.innerHTML = works[i].title;
        
        /** Rangement des balises dans leurs parents */
        figure.appendChild(image);
        figure.appendChild(title);
        gallery.appendChild(figure);
        
    }


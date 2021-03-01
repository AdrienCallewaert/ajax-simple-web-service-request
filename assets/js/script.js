const image = document.getElementById("image");
const citation = document.getElementById("citation");
const auteur = document.getElementById("auteur");

let getData = function () {
  fetch("https://thatsthespir.it/api") //fonction s'execute a la fin du fetch de l'url
    .then((res) => res.json()) //imbriqué :retourne en json
    .then((data) => {
      image.src = data.photo;
      citation.innerText = '"' + data.quote + '"';
      auteur.innerText = '@' + data.author + '_';
    }); //imbriqué :recupère les attributs et les inscrit dans le champ de texte
};

getData();

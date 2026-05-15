// Récupération des éléments HTML5
const colors = document.querySelectorAll(".color__btn");
const shape = document.querySelector(".shape");

// Déclaration de la fonction changeShirtColor qui va permettre le changement decouleur du T-shirt
const changeShirtColor = (e) => {
  let hexadecimalColor = getComputedStyle(e.target).getPropertyValue("--color");
  //console.log(hexadecimalColor);
  shape.style.fill = hexadecimalColor;
};

// Boucle for qui va parcourir tous les boutons couleu
for (let i = 0; i < colors.length; i++) {
  colors[i].onclick = changeShirtColor; // Appel de la fonction changeShirtColor
}

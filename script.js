// // Création de variable pour la liste

const title = document.querySelector(".title_header");

//Ajout d'un événement listener "mouseover" pour changer la couleur du H1

title.addEventListener("mouseover", function () {
  title.style.color = "#cbaf6a";
});

//Ajout d'un événement listener "mouseleave" pour revenir à la couleur originale du H1

title.addEventListener("mouseleave", function () {
  title.style.color = "white";
});

function villes() {
  ul = document.getElementById("myUL");
  li = ul.document.getElementByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
  }
}

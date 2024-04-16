const title = document.querySelector(".title_header");

//Ajout d'un événement listener "mouseover" pour changer la couleur du H1

title.addEventListener("mouseover", function () {
  title.style.color = "#cbaf6a";
});

//Ajout d'un événement listener "mouseleave" pour revenir à la couleur originale du H1

title.addEventListener("mouseleave", function () {
  title.style.color = "white";
});

const burgerBtn = document.getElementById("burgerBtn");
console.log(burgerBtn);
burgerBtn.addEventListener("click", () => {
  console.log("click");
  const ul = document.getElementById("burgerMenu");
  ul.classList.toggle("block");
});

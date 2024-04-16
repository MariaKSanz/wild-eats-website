// // Création de variable pour la liste

// const title = document.querySelector(".title_header");

// //Ajout d'un événement listener "mouseover" pour changer la couleur du H1

// title.addEventListener("mouseover", function () {
//   title.style.color = "#E16A52";
// });

// //Ajout d'un événement listener "mouseleave" pour revenir à la couleur originale du H1

// title.addEventListener("mouseleave", function () {
//   title.style.color = "white";
// });




//ORESTI MAIN JS
const SecCard = document.getElementById("section-epinal");

const createCard = (resto) => {
  const div = document.createElement('div');
  div.classList.add("cards")

  const template = `<div class="cards">
        <div class="card">
          <div class="card-header">
            <div class="card-img" style="background-image: url('${resto.background}')"></div>
            <div class="card-body">
              <h2 class="nameResto">${resto.name}</h2>
              <h3 id="stars">${"&#11088;".repeat(resto.stars)}</h3>
              <img class="sushiicon"  src="./img/${resto.src}" alt="${resto.name}">
            </div>
          </div>
        </div>
      </div>
  `;
  div.innerHTML = template;
  
  return div ;

};

for (let i = 0; i < restos.length; i++) {
  SecCard.appendChild(createCard(restos[i]));
}


// Première etape, injecter les 3 blocs de villes vides....


// Récupérer les 3 bloc distincts

// UNe fois les 3 blocs de villes injectés (mis dans le DOM)
// Faire la boucle sur les restos avec des if else pour injecter dans le bon bloc de ville
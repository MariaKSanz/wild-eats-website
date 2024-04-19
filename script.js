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
burgerBtn.addEventListener("click", () => {
  const ul = document.getElementById("burgerMenu");
  ul.classList.toggle("block");
});
// title.addEventListener("mouseleave", function () {
//   title.style.color = "white";
// });



//ORESTI MAIN JS

const createCard = (resto) => {
  const template = `
      <div class="cards">
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
  
  return template ;
};


const addRestoCards = (cityRestos) => {
  const cards = [];
  for (let i = 0; i < cityRestos.length; i++) {
    cards.push(createCard(cityRestos[i]));
    
  }
  return cards.join("");
}


const filterCards = (filter, ville) => {
  const sectionVilles = document.getElementById(`section-${ville}`);

  sectionVilles.innerHTML = ""
  const div = document.createElement('div');
  div.classList.add("cards");
  
  for (let i = 0; i < restos.length; i++) {
    if(restos[i].city === ville && (restos[i].category === filter.value || filter.value === "")){
      div.innerHTML += createCard(restos[i])
    }
  }; 

  sectionVilles.appendChild(div);
}

const display = document.getElementById("display");

const Cards2 = (city) => {
  const cityResto = [];
  for (let i = 0; i < restos.length; i++){
    if(city === restos[i].city ){
      cityResto.push(restos[i])
    }  
  }

  const section = document.createElement('section')
  section.setAttribute('id', city);

  const template =  `
  <h3 class="cards-name">${city}</h3>
  <label for="type of food"></label>
  <select name="select" id="select-${city}" onchange="filterCards(this, '${city}')">
    <option value="">Filter</option>
    <option value="Sushi">Sushi</option>
    <option value="Burger">Fast Food</option>
    <option value="Veggie">Veggie</option>
  </select>
  <section id="section-${city}" class="city-section">
  <!-- Injection des cartes par villes-->
    ${addRestoCards(cityResto)}
  </section>
`;

section.innerHTML = template;
return section ;
};


const villes = ["Epinal", "Nantes", "Lyon"]

for (let i = 0; i < villes.length; i++){
  const section = Cards2(villes[i])
  display.appendChild(section);
}

/**
const addChangeListeners = () => {

const selectTypeOfFood = document.getElementById('type-of-food');

selectTypeOfFood.addEventListener("change", (event) => {
  console.log("change");
  console.log(event.target.value);
  });
}*/

function getStarship() {
  fetch(`https://swapi.dev/api/starships/?page=1`)
  
  .then((response) => response.json())
  .then((responseJson) => 
    responseJson.results.map((starship) => addStarship(starship)))
  .catch((error) => console.log(error))
}

getStarship()


function addStarship(starship) {
  const loadingStarship = `
  <div class="card">
        <h1>${starship.name}</h1>
        <div class="imageConatainer">
          <img src="https://starwars-visualguide.com/assets/img/starships/${starship.url.replace(/\D/g,"")}.jpg" alt="${starship.name}">
        </div>
        <div class="info">
          <h1>Description</h1>
          <div class="content-info">
          <h3>Name: ${starship.name}</h3>
          <h3>Model: ${starship.model}</h3>
          <h3>manufacturer:${starship.manufacturer}</h3>
        </div>
        </div>
      </div>
  `

  const section = document.getElementsByClassName("cardContainer")[0]


  section.insertAdjacentHTML("beforeend", loadingStarship)
}
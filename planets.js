function getPlanets() {
  fetch("https://swapi.dev/api/planets/")
  .then((response) => response.json())
  .then((responseJson) => 
    responseJson.results.map((planets) => addPlanets(planets)))
  .catch((error) => console.log(error))
}

getPlanets()


function addPlanets(planets) {
  const loadingPlanets = `
  <div class="card">
        <h1>${planets.name}</h1>
        <div class="imageConatainer">
          <img src="https://starwars-visualguide.com/assets/img/planets/${planets.url.replace(/\D/g,"")}.jpg" alt="${planets.name}">
        </div>
        <div class="info">
          <h1>Description</h1>
          <div class="content-info">
          <h3>Name: ${planets.name}</h3>
          <h3>Population: ${planets.population}</h3>
          <h3>Diameter:${planets.diameter}</h3>
        </div>
        </div>
      </div>
  `

  const section = document.getElementsByClassName("cardContainer")[0]


  section.insertAdjacentHTML("beforeend", loadingPlanets)
}
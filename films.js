function getFilms() {
  fetch(`https://swapi.dev/api/films/?page=1`)
  
  .then((response) => response.json())
  .then((responseJson) => 
    responseJson.results.map((films) => addFilm(films)))
  .catch((error) => console.log(error))
}

getFilms()


function addFilm(films) {
  const loadingFilm = `
  <div class="card">
        <h1>${films.title}</h1>
        <div class="imageConatainer">
          <img src="https://starwars-visualguide.com/assets/img/films/${films.url.replace(/\D/g,"")}.jpg" alt="${films.title}">
        </div>
        <div class="info">
          <h1>Description</h1>
          <div class="content-info">
          <h3>Name: ${films.title}</h3>
          <h3>Release Date: ${films.release_date}</h3>
          <h3>Producer:${films.producer}</h3>
        </div>
        </div>
      </div>
  `

  const section = document.getElementsByClassName("cardContainer")[0]


  section.insertAdjacentHTML("beforeend", loadingFilm)
}
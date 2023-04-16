function getChar() {
  fetch(`https://swapi.dev/api/people/?page=1`)
  
  .then((response) => response.json())
  .then((responseJson) => 
    responseJson.results.map((char) => addChar(char)))
  .catch((error) => console.log(error))
}

getChar()


function addChar(char) {
  const loadingChar = `
  <div class="card">
        <h1>${char.name}</h1>
        <div class="imageConatainer">
          <img src="https://starwars-visualguide.com/assets/img/characters/${char.url.replace(/\D/g,"")}.jpg" alt="${char.name}">
        </div>
        <div class="info">
          <h1>Description</h1>
          <div class="content-info">
          <h3>Name: ${char.name}</h3>
          <h3>Birt year: ${char.birth_year}</h3>
          <h3>Gender:${char.gender}</h3>
        </div>
        </div>
      </div>
  `

  const section = document.getElementsByClassName("cardContainer")[0]


  section.insertAdjacentHTML("beforeend", loadingChar)
}
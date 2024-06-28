function createApi() {
  var disneyApi = "https://api.disneyapi.dev/character";

  fetch(disneyApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      var cardContainer = document.createElement("div");
      cardContainer.classList.add("card-container");

     
      
      data.data.forEach((character) => {
        var card = document.createElement("div");
        card.classList.add("card");

        var img = document.createElement("img");
        img.src = character.imageUrl;
        img.alt = character.name;

        var name = document.createElement("h2");
        name.textContent = "Character Name:"+character.name;

        var films = document.createElement("p");
        films.textContent = "Films: " + character.films.join(", ");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(films);

        cardContainer.appendChild(card);
      });

     
      document.body.appendChild(cardContainer);
    })
    .catch((error) => {
      console.log(error);
    });
}

createApi();

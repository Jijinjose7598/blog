function createApi() {
  var spacexApi = "https://api.spacexdata.com/v5/launches/latest";

  fetch(spacexApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

     
      const launch = data;

     
      const cardContainer = document.getElementById("card-container");

     
      const card = document.createElement("div");
      card.classList.add("card");
     
      card.innerHTML = `
        <h2>${launch.name}</h2>
        <div class="image-container">
          <img src="${launch.links.patch.small}" alt="SpaceX Patch">
        </div>
        <p><strong>Flight Number:</strong> ${launch.flight_number}</p>
        <p><strong>Date:</strong> ${launch.date_utc}</p>
        <p><strong>Details:</strong> ${launch.details}</p>
        <!-- Add more details as needed -->
      `;

      
      cardContainer.appendChild(card);
    })
    .catch((error) => {
      console.log(error);
    });
}

createApi();

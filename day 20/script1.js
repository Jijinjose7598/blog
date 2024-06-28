
var bikeApi = "http://api.citybik.es/v2/networks";

fetch(bikeApi) 
  .then((response) => response.json()) 
  .then((data) => {
    
    console.log(data);

   
    const cardContainer = document.getElementById("card-container");

   
    data.networks.forEach((network) => {
    
      const card = document.createElement("div");
      card.classList.add("card"); 

     
      const title = document.createElement("h2");
      title.textContent = network.name;

      const location = document.createElement("p");
      location.textContent = `Location: ${network.location.city}, ${network.location.country}`;

      const company = document.createElement("p");
      company.textContent = `Company: ${network.company}`;

      
      card.appendChild(title);
      card.appendChild(location);
      card.appendChild(company);

     
      cardContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.log(error);
  });

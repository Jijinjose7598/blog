var rest_API = "https://restcountries.com/v3.1/all";

async function api() {
  try {
    var response = await fetch(rest_API);
    var countries = await response.json();

    var parent = document.querySelector(".row");

    // Create the title element
    var titleElement = document.createElement("h1");
    titleElement.setAttribute("id", "title");
    titleElement.classList.add("text-center");
    titleElement.innerText = "Countries Information";

    // Prepend the title to the container
    var container = document.querySelector(".container");
    container.insertBefore(titleElement, parent);

    // Iterate through countries and create cards
   countries.forEach((country, index) => {
     var colDiv = document.createElement("div");
     colDiv.classList.add(
       "col-sm-6",
       "col-md-4",
       "col-lg-4",
       "col-xl-4",
       "mb-3"
     );

     // Create Bootstrap card
     var card = document.createElement("div");
     card.classList.add("card", "h-100");

     // Header with country name
     var cardHeader = document.createElement("div");
     cardHeader.classList.add(
       "card-header",
       "text-center",
       "bg-dark",
       "text-light",
       "fw-bold"
     );
     cardHeader.innerText = country.name.common;
     card.appendChild(cardHeader);

     // Country flag
     var countryFlags = document.createElement("img");
     countryFlags.setAttribute("src", country.flags.png);
     countryFlags.setAttribute("alt", `${country.name.common} flag`);
     countryFlags.classList.add("card-img-top", "mt-2"); // Adjust spacing as needed
     card.appendChild(countryFlags);

     // Card body
     var cardBody = document.createElement("div");
     cardBody.classList.add("card-body");

     var cardText = document.createElement("div");
     cardText.setAttribute("class", "card-text");
     cardBody.appendChild(cardText)

     // Other country details
     var countryCapital = document.createElement("p");
    //  countryCapital.classList.add("card-text");
     countryCapital.innerText = "Capital: " + country.capital;
     cardText.appendChild(countryCapital);

     var countryRegion = document.createElement("p");
    //  countryRegion.classList.add("card-text");
     countryRegion.innerText = "Region: " + country.region;
     cardText.appendChild(countryRegion);

     var countryId = document.createElement("p");
     countryId.classList.add("card-text");
     countryId.innerText = "ID: " + country.cca3;
     cardText.appendChild(countryId);

     var countryPopulation = document.createElement("p");
     countryPopulation.classList.add("card-text");
     countryPopulation.innerText = "Population: " + country.population;
     cardText.appendChild(countryPopulation);

     // Button for weather
     var clickButton = document.createElement("button");
     clickButton.classList.add("btn", "btn-primary", "mt-3");
     clickButton.innerText = "Click For Weather";
     clickButton.addEventListener("click", function () {
       clicking(country.latlng[0], country.latlng[1]);
     });
     cardBody.appendChild(clickButton);

     // Append card body to card
     card.appendChild(cardBody);

     // Append card to column
     colDiv.appendChild(card);

     // Append column to parent row
     parent.appendChild(colDiv);

     
     if (index === 0) {
       
       var firstCard = document.querySelector(".row .card");
       console.log("First Card:", firstCard);
       firstCard.classList.add("border", "border-primary");
     }
   });
  } catch (error) {
    console.log(error);
  }
}

async function clicking(lat, lon) {
  var apiKey = "954def9b43dcefbbe4fc1fbad0c79246";
  var API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    var response = await fetch(API);
    var data = await response.json();

    if (response.ok) {
      // Display weather information in an alert
      alert(`
                Temperature: ${data.main.temp} °C
                Weather: ${data.weather[0].main}
                Description:${data.weather[0].description}
            `);
    } else {
      console.log("Weather API request failed");
    }
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
}


api();

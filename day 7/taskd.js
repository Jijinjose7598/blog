var uri = "https://restcountries.com/v3.1/all"; 
// Initialize New XMLHttpRequest instance
var newInstance = new XMLHttpRequest();
newInstance.open("GET", uri);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    var countries = JSON.parse(this.response);
    ;
    var totalPopulation = countries.reduce((prev, current) => {
      if (typeof prev === "object") {
        return prev.population + current.population;
      }
      return prev + current.population;
    });
    console.log("Population", totalPopulation);
  }
};
newInstance.onerror = function (error) {
  console.log("Error occured", error);
};

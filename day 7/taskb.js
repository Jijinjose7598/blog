
var uri = "https://restcountries.com/v3.1/all";
// Initialize New XMLHttpRequest instance
var newInstance = new XMLHttpRequest();
newInstance.open("GET", uri);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    var countries = JSON.parse(this.response);
    var thecountries = countries.filter(
      (country) => country.population < 200000
    );
    console.log(thecountries);
  }
};
newInstance.onerror = function (error) {
  console.log("Error occured", error);
};

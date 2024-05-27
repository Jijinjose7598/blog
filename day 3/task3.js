var uri = "https://restcountries.com/v3.1/all";
// Initialize New XMLHttpRequest instance
var newInstance = new XMLHttpRequest();
newInstance.open("GET", uri);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    var restcountries = JSON.parse(this.response);
    for (var i = 0; i <= restcountries.length; i++) {
      console.log("Country Name:", restcountries[i].name.common);
      console.log("Region:", restcountries[i].region);
      console.log("SubRegion:", restcountries[i].subregion);
      console.log("Populations:", restcountries[i].population);
    }
  }
};
newInstance.onerror = function (error) {
  console.log("Error occured", error);
};

const uri = "https://restcountries.com/v3.1/all";

const newInstance = new XMLHttpRequest();
newInstance.open("GET", uri);
newInstance.send();
newInstance.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    const countries = JSON.parse(this.response);
    const usdCountries = countries.filter((country) => {
      return (
        country.currencies &&
        country.currencies.USD !== null &&
        country.currencies.USD !== undefined
      );
    });
    console.log(usdCountries);
  }
};
newInstance.onerror = function (error) {
  console.log("Error occurred", error);
};

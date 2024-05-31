class Uber {
  constructor(pricePerKms, kms) {
    this.pricePerKms = pricePerKms;
    this.kms = kms;
  }

  get price() {
    return this.kms * this.pricePerKms;
  }
}


const taxi = new Uber(50, 5);
console.log("The price for your Uber ride is $ :", taxi.price);

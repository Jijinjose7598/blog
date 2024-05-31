class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Circle[radius=${this.radius},color=${this.color}]`;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}


const circle1 = new Circle();
console.log(circle1.toString()); // Output: Circle[radius=1,color=red]
console.log(circle1.getArea()); // Output: 3.141592653589793
console.log(circle1.getCircumference()); // Output: 6.283185307179586

const circle2 = new Circle(2.5, "blue");
console.log(circle2.toString()); // Output: Circle[radius=2.5,color=blue]

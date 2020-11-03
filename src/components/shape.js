// declare class

// export class using module.exports
// var Component = React.Component;
class Shape {
  Constructor(color) {
    this.color = color;
  }
  color: "blue";
  drawShape() {
    console.log("A random shape is drawn");
  }
  calculateArea() {
    console.log("Area of shape is xyz");
  }
}
module.exports = Shape;

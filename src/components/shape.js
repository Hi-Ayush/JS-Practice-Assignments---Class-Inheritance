// declare class

// export class using module.exports
var React = require("react");
// var Component = React.Component;
class Shape extends React.Component {
  // color = "blue";
  Constructor(color) {
    this.color = color;
  }
  drawShape() {
    console.log("A random shape is drawn");
  }
  calculateArea() {
    console.log("Area of shape is xyz");
  }
}
module.exports = Shape;

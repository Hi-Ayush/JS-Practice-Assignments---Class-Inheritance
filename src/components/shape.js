// declare class

// export class using module.exports
var React = require("react");
var Component = React.Component;
class Shape extends Component {
  Constructor() {
    this.color = "blue";
  }
  drawShape() {}
  calculateArea() {}
}
module.exports = Shape;

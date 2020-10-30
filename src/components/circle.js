// import using require

// declare class
var Shape = require("shape");
var Component = Shape.Component;
class Circle extends Component {
  calculateArea() {}
}
module.exports = Circle;

// export class using module.exports

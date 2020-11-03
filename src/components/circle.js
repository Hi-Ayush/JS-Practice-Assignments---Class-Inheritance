// import using require

// declare class
var Shape = require("shape");
// var Component = Shape.Component;
class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("Area of circle is abc");
  }
}
module.exports = Circle;

// export class using module.exports

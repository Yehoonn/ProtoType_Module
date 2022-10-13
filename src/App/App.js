import squareArea from "../Module/squareArea.js";

let width = 40;
let height = 20;

class test {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

test.prototype.squareArea = (width, height) => {
  return width * height;
};
test.prototype.lol = () => {
  return "lol";
};

test.prototype.hello = () => {
  return "hello";
};

let square = new test(width, height);

console.log(square.lol());

console.log(square.__proto__);

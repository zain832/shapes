'use strict';
const Square = require("./square.js");
const Triangle = require("./triangle.js");
const Pentagon = require("./pentagon.js");

function Shape (type) {
	if(!(this instanceof Shape)){
		return new Shape (type);
	}

	this.type = type;
};

Shape.prototype.get_type = function() {
	return "This shape type is " + this.type;
};

Shape.prototype.get_totalLength = function () {
	var length = 0;
	if (this.type === 'Triangle') {
		length = this.side1 + this.side2 + this.side3;
	} else if (this.type === 'Square') {
		length = 4 * this.side;
	} else if (this.type === "Pentagon") {
		length = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;
	}
	return length;
};

Square.prototype = new Shape();
Square.prototype.construtor = Square;

Triangle.prototype = new Shape();
Triangle.prototype.construtor = Triangle;

Pentagon.prototype = new Shape();
Pentagon.prototype.construtor = Pentagon;

var tri1 = new Triangle(3,4,5);
var square1 = new Square(4);
var pent1 = new Pentagon(1,2,3,4,5);
var shape = new Shape("shape");

console.log(tri1.get_type());
console.log(tri1.get_totalLength());

console.log(square1.get_type());
console.log(square1.get_totalLength());

console.log(pent1.get_type());
console.log(pent1.get_totalLength());

console.log(shape);
console.log(tri1 instanceof Triangle);
console.log(square1 instanceof Square);
console.log(pent1 instanceof Pentagon);
console.log(shape instanceof Shape);
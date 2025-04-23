class Rectangle{
    constructor(length , breadth){
        this.length = length;
        this.breadth = breadth;
    }

    calculateArea(){
        return this.length*this.breadth;
    }

    calculatePerimeter(){
        return 2 * (this.length+this.breadth);
    }
}
let rect = new Rectangle(4 , 6);
console.log(`Area of Rectangle : ${rect.calculateArea().toFixed(2)}`);
console.log(`Perimeter of Rectangle : ${rect.calculatePerimeter().toFixed(2)}`);


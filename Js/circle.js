class Circle{
    constructor(radius){
        this.radius=radius;
    }

    calculateArea(){
        return Math.PI * this.radius*this.radius;
    }

    calculatePerimeter(){
        return 2 * Math.PI * this.radius;
    }
}

let circle = new Circle(4.0);
console.log(`Area of circle : ${circle.calculateArea().toFixed(2)}`);
console.log(`Perimeter of circle : ${circle.calculatePerimeter().toFixed(2)}`);


class Car {
  constructor(brand, model, year, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
  }
}

let car1 = new Car("Hyundai", "creta", 2020, 1500000);
let car2 = new Car("Honda", "city", 2018, 1400000);
let car3 = new Car("Suzuki", "Swift", 2019, 900000);
let car4 = new Car("Honda", "civic", 2021, 1600000);
let car5 = new Car("Honda", "Type-r", 2022, 2200000);
let car6 = new Car("Tata", "nexon", 2019, 1200000);

let cars = [car1, car2, car3, car4, car5, car6];

let total_price = cars.reduce((sum, car) => sum + car.price, 0);

let Average_price = total_price/cars.length;
console.log(`Average price of car : ${Average_price.toFixed(2)}`);

let honda_cars = cars.filter(car => car.brand=="Honda" );
console.log(`Available Honda cars : `);
console.log(honda_cars);


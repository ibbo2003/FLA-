var Employee = /** @class */ (function () {
    function Employee(name, salary, d, eId) {
        this.name = name;
        this.salary = salary;
        this.department = d;
        this.employeeID = eId;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Department: ").concat(this.department);
    };
    Employee.prototype.calculateBonus = function () {
        return this.salary * 0.1;
    };
    Employee.prototype.showBonus = function () {
        return "bonus = ".concat(this.calculateBonus());
    };
    return Employee;
}());
var E1 = new Employee('shadab', 40000, 'HR', 224);
var result = E1.getDetails();
// let v = E1.calculateBonus; cannot access as it is private 
console.log(result);
var bonus = E1.showBonus();
console.log(bonus);

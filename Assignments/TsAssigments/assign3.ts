class Employee {
    public name : string;
    private salary : number;
    protected department : string;
    readonly employeeID : number;

    constructor (name : string, salary : number , d : string , eId : number){
            this.name = name;
            this.salary = salary;
            this.department = d;
            this.employeeID = eId;
    }
    public getDetails(): string {
        return `Name: ${this.name}, Department: ${this.department}`;
    }
    private calculateBonus(): number {
        return this.salary * 0.1; 
    }
    public showBonus() : string {
        return `bonus = ${this.calculateBonus()}`
    }

}
const E1 : Employee = new Employee('shadab',40000,'HR',224);
let result  = E1.getDetails();
// let v = E1.calculateBonus; cannot access as it is private 

console.log(result);
let bonus = E1.showBonus();
console.log(bonus);


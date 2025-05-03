// factorial
var n = 5;
var fact = function (n) {
    if (n == 0) {
        return 1;
    }
    else {
        return fact(n - 1);
    }
};
console.log(fact(5));
// Prime or composite
var isPrime = function (n) {
    var prime = true; // let's assume that number is prime
    for (var i = 2; i < n; i++) {
        var remainder = n % i;
        //console.log(`Dividing ${n} by ${i} gives remainder ${remainder}`);
        if (n % i == 0) {
            console.log("Remainder is 0, so ".concat(n, " is not prime.. breaking the loop"));
            prime = false; // number is not prime
            break;
        }
    }
    prime == true ? console.log("prime") : console.log("not prime");
};
isPrime(23);
// array
var sales = [2000, 3000, 4000, 2000, 6000];
var result = sales.reduce(function (total, sale) { return (total += sale); }, 0);
console.log(result);

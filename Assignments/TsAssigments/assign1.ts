// factorial
let n: number = 5;

// let fact  = (n: number) => {
//   if (n == 0) {
//     return 1;
//   } else {
//     return fact * fact(n - 1);
//   }
// };
function fact(n : number){
    if (n==0){
        return 1;
    }else {
        let v : number = 0;
        for (let i : number = n ; i > 0 ; i--){
            v = v * i;
        }
        return v;
    }
}
console.log(fact(n));

// Prime or composite
let isPrime = (n: number) => {
  let prime: boolean = true; // let's assume that number is prime

  for (let i: number = 2; i < n; i++) {
    let remainder: number = n % i;
    //console.log(`Dividing ${n} by ${i} gives remainder ${remainder}`);
    if (n % i == 0) {
      console.log(`Remainder is 0, so ${n} is not prime.. breaking the loop`);
      prime = false; // number is not prime
      break;
    }
  }
  prime == true ? console.log("prime") : console.log("not prime");
};

isPrime(23);
// array

let sales: number[] = [2000, 3000, 4000, 2000, 6000];
let result: number = sales.reduce((total, sale) => (total += sale), 0);
console.log(result);

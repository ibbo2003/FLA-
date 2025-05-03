
let sales: number[] = [2000, 3000, 4000, 2000, 6000];
let result: number = sales.reduce((total, sale) => (total += sale), 0);
console.log(result);

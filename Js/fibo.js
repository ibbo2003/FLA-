let n = 10;
let a = 0;
let b = 1;
let next = 0;
let i;
for ( i = 1 ; i<= n;i++){ 
    console.log(`${a}`)
    next = a + b ;
    a = b;
    b = next;
}
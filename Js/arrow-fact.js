let printfact = (n)=>{
    let fact=1;
    for(i = n ; i>=1 ; i--){
        fact = fact * i;
    }
    console.log(`Factorial of ${n} is ${fact}`);
    
}
printfact(4);
printfact(6);
let array1 = [1, 2, 4, 5, 6, 7, 8, 9];
let newArray = array1.map((e) => {
  if (e % 2) 
    return e+1;
  else 
    return e*2;
  
});
console.log(newArray);

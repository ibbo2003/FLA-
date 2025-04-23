const products = [
    { name: "Laptop", price: 50000, stock: 15 },
    { name: "Mobile", price: 15000, stock: 8 },
    { name: "Headphones", price: 2000, stock: 20 },
    { name: "Keyboard", price: 1000, stock: 5 },
  ];

  const filteredProducts = products.filter(product=>product.stock>=15);

  const updatedProducts = filteredProducts.map(product => {
    return { ...product, price: product.price * 1.15 };
  });
  
console.log("Original Products:", products);
console.log("Filtered Products:", filteredProducts);
console.log("Updated Products:", updatedProducts);


  
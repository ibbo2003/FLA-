function ProductList() {
    const products = [
    {id :1, name: "Laptop", price: "1200",desc : "Brand new laptop"},
    {id :2, name: "Mobile", price: "1300", desc : "The All new mobile"},
    {id :3, name: "Television", price: "1100", desc : "The biggest Television in the market"}
];
return (
     <ul className="list-group">
      {products.map((products) => (
        <li key={products.id} className="list-group-item">
          <strong>{products.name}</strong> - {products.price}
          <div>{products.desc}</div>
          <a className="btn btn-primary">Check</a>
        </li>
      ))}
    </ul>

);
}
export default ProductList;

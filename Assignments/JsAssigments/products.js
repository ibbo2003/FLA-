var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Products = [
    { name: "Laptop", price: 50000, stock: 15 },
    { name: "Mobile", price: 15000, stock: 8 },
    { name: "Headphones", price: 2000, stock: 20 },
    { name: "Keyboard", price: 1000, stock: 5 },
];
var filteredProducts = Products.filter(function (product) { return product.stock >= 15; });
var updatedProducts = filteredProducts.map(function (product) {
    return __assign(__assign({}, product), { price: product.price * 1.15 });
});
console.log("Original Products:", Products);
console.log("Filtered Products:", filteredProducts);
console.log("Updated Products:", updatedProducts);

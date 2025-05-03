var p1 = {
    id: 1,
    name: "redmi note 2",
    price: 10000
};
var p2 = {
    id: 2,
    name: 'realme 3',
    price: 8000,
    description: "with brand new mediacore chipset "
};
function printProductDetails(product) {
    console.log("Product id : ".concat(product.id));
    console.log("Product name : ".concat(product.name));
    console.log("Product price : ".concat(product.price));
    if (product.description) {
        console.log("Product desc : ".concat(product.description));
    }
}
printProductDetails(p1);
printProductDetails(p2);
function createUser(username, email, phoneNumber) {
    if (phoneNumber) {
        var user1_1 = {
            username: username,
            email: email,
            phoneNumber: phoneNumber
        };
        return user1_1;
    }
    else {
        var user2_1 = {
            username: username,
            email: email,
        };
        return user2_1;
    }
}
var user1 = createUser("shabbar", "shadab@gmail.com");
var user2 = createUser("Aeraf", "arif@gmail.com", "8861333207");
// function Discounted price
function calculateDiscountedPrice(price, discountPercent) {
    if (discountPercent) {
        return price * (1 - (discountPercent / 100));
    }
    else {
        return price;
    }
}
var discount = calculateDiscountedPrice(4000, 20);
var discount1 = calculateDiscountedPrice(8000);
console.log("Discounted Price : ".concat(discount));
console.log("Discounted Price : ".concat(discount1));

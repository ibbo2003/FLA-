interface Product {
    id: number
    name: string
    price: number
    description?: string
}
let p1 : Product = {
    id : 1,
    name : "redmi note 2",
    price : 10000
};
let p2 : Product = {
    id : 2,
    name : 'realme 3',
    price : 8000,
    description : "with brand new mediacore chipset "
};

function printProductDetails(product: Product){
        console.log(`Product id : ${product.id}`);
        console.log(`Product name : ${product.name}`);
        console.log(`Product price : ${product.price}`);
        if (product.description){
        console.log(`Product desc : ${product.description}`);
            
    }
}
printProductDetails(p1);
printProductDetails(p2);

//User Interface

interface User{
    username: string
    email: string
    phoneNumber?: string
}

function createUser(username: string, email: string, phoneNumber?: string){
    if (phoneNumber){
        let user1 : User ={
            username : username,
            email : email,
            phoneNumber : phoneNumber
        }
        return user1;
    }
    else{
        let user2 : User ={
            username : username,
            email : email,
        }
        return user2;
    }
}
let user1 : User = createUser("shabbar","shadab@gmail.com");
let user2 : User = createUser("Aeraf","arif@gmail.com","8861333207") 
// function Discounted price

function calculateDiscountedPrice(price : number , discountPercent?: number){
    if (discountPercent){
        return price * (1-(discountPercent/100));
    }
    else{
        return price;
    }
}

let discount : number = calculateDiscountedPrice(4000 , 20);
let discount1 : number = calculateDiscountedPrice(8000);
console.log(`Discounted Price : ${discount}`);
console.log(`Discounted Price : ${discount1}`);




class Customer{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

class ShoppingCart{
    constructor(){
        this.cartItems = [];
    }
    addProducts(product,quantity){
        this.cartItems.push({
            product,quantity
        })
    }
    getCart(){
        return this.cartItems;
    }
    calculateTotalPrice(){
        return this.cartItems.reduce(
            (total,cartItem)=>
             (total += cartItem.quantity*cartItem.product.price),
             0
        );
    }
    buyItem(){
        this.cartItems.forEach((element)=>{
            element.product.quantity -= element.quantity
        })
        this.cartItems = []
        console.log("Items bhought successfully")
        console.log("No of items in cart "+this.cartItems.length)
        console.log("Items and details in store",Atta,Apples,Orange,Paneer)
    }
}
class Products{
    constructor(id,name,price,quantity){
        this.id =id
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

//Customer logged in 
var customer = new Customer('Hari','hari@yahoo.com')
console.log('Customer login: '+customer.name+' ('+customer.email+')')

//initialising items
var Atta = new Products(1,'Atta', 50, 60)
var Apples = new Products(2,'Apples',130,60)
var Orange = new Products(3,'Orange',60,70)
var Paneer = new Products(4,'Paneer',300,16)

console.log("Products added: ",Atta, Apples, Orange,Paneer)

var sc = new ShoppingCart()
sc.addProducts(Atta,2)
sc.addProducts(Apples,3)
console.log("2 kg of atta and 3 kg of apple added to shopping cart", sc.getCart())
console.log('Total price of items in cart', sc.calculateTotalPrice())

sc.buyItem()




interface Product{
    name: string
    price: number
}

class ShoppingCart{
  private items: CartItem[]
  constructor(){
    this.items =[]
  }
    addItem(item: CartItem){
        this.items.push(item)
    }
    getItems(){
        return this.items
    }
    getTotal(){
        return this.items.reduce((acc, cartItem)=>acc+cartItem.price, 0)
    }
}
class CartItem implements Product{
    constructor(public name: string, public price: number){

    }
}
const cart = new ShoppingCart();

const productButtons = document.querySelectorAll('button')

productButtons.forEach((productButton)=>{
    productButton.onclick = ()=>{
        const name = productButton.getAttribute("data-name");
        const price = productButton.getAttribute("data-price");
        if (name && price){
            const cartItem = new CartItem(name, parseFloat(price));
            cart.addItem(cartItem)
        }
        renderData()
    }
})

const cartItems = document.getElementById("cartItems") as HTMLUListElement

const totalPrice = document.getElementById("totalPrice") as HTMLParagraphElement

const renderData = () =>{
    cartItems.innerHTML = ''

    cart.getItems().forEach((item)=>{
        cartItems.innerHTML += `
            <li>${item.name}  &#x20b9; ${item.price}</li>
        `
    })
    totalPrice.innerHTML = `&#x20b9; ${cart.getTotal()}`
}
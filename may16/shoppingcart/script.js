var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCart.prototype.getItems = function () {
        return this.items;
    };
    ShoppingCart.prototype.getTotal = function () {
        return this.items.reduce(function (acc, cartItem) { return acc + cartItem.price; }, 0);
    };
    return ShoppingCart;
}());
var CartItem = /** @class */ (function () {
    function CartItem(name, price) {
        this.name = name;
        this.price = price;
    }
    return CartItem;
}());
var cart = new ShoppingCart();
var productButtons = document.querySelectorAll('button');
productButtons.forEach(function (productButton) {
    productButton.onclick = function () {
        var name = productButton.getAttribute("data-name");
        var price = productButton.getAttribute("data-price");
        if (name && price) {
            var cartItem = new CartItem(name, parseFloat(price));
            cart.addItem(cartItem);
        }
        renderData();
    };
});
var cartItems = document.getElementById("cartItems");
var totalPrice = document.getElementById("totalPrice");
var renderData = function () {
    cartItems.innerHTML = '';
    cart.getItems().forEach(function (item) {
        cartItems.innerHTML += "\n            <li>".concat(item.name, "  &#x20b9; ").concat(item.price, "</li>\n        ");
    });
    totalPrice.innerHTML = "&#x20b9; ".concat(cart.getTotal());
};
//# sourceMappingURL=script.js.map
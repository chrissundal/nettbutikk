function deleteItem(cartIndex) {
    totalPrice -= shoppingCart[cartIndex].price;
    shoppingCart.splice(cartIndex, 1)
    updateView();
}
function openCart() {
    isOpen = true;
    updateView();
}

function addToCart(index) {
    totalPrice += productItems[index].price;
    ShoppingCartCounter = shoppingCart.length + 1;
    shoppingCart.push(productItems[index])
    updateView();
}

function closePocket() {
    isOpen = false;
    updateView();
}
function checkOut() {
    if (confirm('Betale nå?') == true) {
        shoppingCart = []
        totalPrice = 0;
        ShoppingCartCounter = 0;
        isOpen = false;
        updateView();
    } else {
        updateView();
    }
}
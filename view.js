
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="topHeader">
    <h1>Nettbutikk</h1>
    </div>
        <div class="grid">
        ${showProducts()}
        </div>
        ${createDropdown()}
    <footer>
        <p>Author: Chris</p>
        <p><a href="mailto:christoffersj@hotmail.com">Kontakt oss</a></p>
    </footer>
    `;
}
function createDropdown() {
    let html = '';
    if (isOpen == false) return `
    <div class="cartButtonDiv" onclick="openCart()">
        <img src="IMG/cart.png" class="cartButton" height = 60px>
        <div class="cartCounter">${ShoppingCartCounter}</div>
    </div>
    `;
    else if (isOpen == true) {
        html = `
        <div class="dropDown">
            <div class="main">
                <div>${createCartItems()}</div>
                <div><strong>Totalt: ${totalPrice} kr</strong></div>
                <button onclick="checkOut()">Checkout</button>
                <button onclick="closePocket()">Close</button>
            </div>
        </div>
        `;
    }
    return html;
}
function createCartItems() {
    let html = '';
    for (let cartIndex = 0; cartIndex < shoppingCart.length; cartIndex++) {
        html += `
        <div class="innerCart">
            <img src="${shoppingCart[cartIndex].img}" height = 50px width = 50px/>
            <div>${shoppingCart[cartIndex].name}</div>
            <div>Pris: ${shoppingCart[cartIndex].price} kr</div>
            <button onclick="deleteItem(${cartIndex})">X</button>
        </div>
        `;
    }
    return html;
}
function showProducts() {
    let showpro = '';
    for (let index = 0; index < productItems.length; index++) {
        showpro += `
        <div class="products">
            <div class="innerItem">
                <div>${productItems[index].name}</div><br>
                <div class="innerImg"><img src="${productItems[index].img}" height = 100px width = 100px/></div>
                <div>Pris: ${productItems[index].price} kr</div>
                <button class="addToCartBtn" onclick="addToCart(${index})">add to cart</button>
            </div>
        </div>
        `;
    }
    return showpro;
}
let pocketStuff = ['Hat', 'Pencil', 'Dinosaur', 'Showercap', 'Piece of Tape'];
let imgFiles = ['IMG/hatt.jpg', 'IMG/blyant.jpg', 'IMG/dinosaur.jpg', 'IMG/showercap.jpg', 'IMG/tape.jpg']
let prices = [49, 15, 149, 99, 35]
let shoppingCart = []
let showItem = '';
let isOpen = false;
let productHtml = '';
let totalPrice = 0;
let itemPrice = 0;

updateView();
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="topHeader">
    <h1>Nettbutikk</h1>
    </div>
        <div class="grid">
        ${showProducts()}
        </div>
    <div class="dropDown">
        ${createPockets()}
    </div>
    
    `;
}
function createPockets(){
    let html = '';
    if (isOpen == false) return '<button class="cartButton" onclick="updateCart()">Handlekurv</button>';
    else if (isOpen == true) { html = `
        <div class="main">
        <div>${showItem}</div>
        <div>Totalt: ${totalPrice}</div>
        <button onclick="checkOut()">Checkout</button>
        <button onclick="closePocket()">Close</button>
        </div>
        `; 
    }  
    return html;
}

function updateCart(){
    isOpen = true; 
    updateView();
}
function showProducts(){
    let showpro = '';
    for (let index = 0; index < pocketStuff.length; index++) {
        showpro += `
        <div class="products">
        <div class="innerItem">
        <div>${pocketStuff[index]}</div>
        <img src="${imgFiles[index]}" height = 100px width = 100px/>
        <div>Pris: ${prices[index]} kr</div>
        <button onclick="addToCart(${index})">add to cart</button>
        </div>
        </div>
        `;
    }
    return showpro;
}
function showCartItems(index){
    productHtml = `
    <div class="cartItems">
    <img src="${imgFiles[index]}" height = 30px width = 30px/>
    <div> ${pocketStuff[index]}</div>
    <div class="price">${prices[index]} kr</div>
    <div class="delBtn">
    <button onclick="deleteItem(this)">X</button>
    </div>
    </div>
    `;
    return productHtml;
}
function addToCart(index){
    itemPrice = prices[index]
    totalPrice += itemPrice;
    shoppingCart.push(showCartItems(index)) 
    showItem = shoppingCart
    updateView();
}
function deleteItem(elementID) {
    totalPrice -= itemPrice;
    console.log(totalPrice)
    console.log(prices)
    shoppingCart.splice(elementID, 1)
    updateView(); 
    showCartItems();
 }
function closePocket(){
    isOpen = false;
    updateView();
}
function checkOut(){
    if (confirm('Betale nå?') == true) {
        shoppingCart = []
        productHtml = '';
        totalPrice = 0;
        isOpen = false;
        updateView();
    }else{
        updateView();
    }
    
}
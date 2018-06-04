var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {};
 newItem.itemName = item;
 newItem.itemPrice = Math.floor(Math.random() * 99) + 1;
 cart.push(newItem);
 return `${item} has been added to your cart.`
 
}

function viewCart() {
  // write your code here
  if (cart.length ===0){
    return "Your shopping cart is empty."
  }
  
  else{
  var newArr = [];
  for(var n=0; n<cart.length-1; n++){
    newArr.push(`${cart[n][itemName]} at ${cart[n][itemPrice]}`)
    
  }
  newArr = [...newArr.slice(0, newArr.length), 'and', ...newArr[newArr.length]]
  var string = newArr.join(', ');
  return `In your cart, you have ` + string;
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

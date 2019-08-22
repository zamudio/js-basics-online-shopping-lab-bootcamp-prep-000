var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomPrice = Math.floor(Math.random() * 100) + 1
  var addItemToCart = {
    itemName: item,
    itemPrice: randomPrice
  }
  cart.push(addItemToCart)
  return `${addItemToCart.itemName} has been added to your cart.`
}

function viewCart() {
  //if items in cart, do actions below >><< else return "Your //shopping cart is empty."
  //loop over every item in cart
  //return as `In your cart, you have ${itemName} at //${itemPrice}, ... .`
  //syntax is important for handling 1-item cart, 2-item cart, //3item cart
  
  var tempCart = []
  
  for(let i = 0; i < cart.length; i++) {
    tempCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  
  if (cart.length === 0) {
    return "Your shopping cart is empty"
  }
  else {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
}

function total() {
  let cost = 0
  for (let i = 0; i < cart.length; i++) {
    cost += cart[i].itemPrice
  }
  return cost
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    cart = []
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}

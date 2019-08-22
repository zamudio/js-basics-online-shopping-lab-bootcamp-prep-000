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
}

function total() {
  //iterate through cart
  //add up item price from each item
  //returns total value
  
  let cost = 0
  for (let i = 0; i < cart.length; i++) {
    cost += cart[i].itemPrice
  }
  return cost
  return 71 //REMOVE THIS!!!!!
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

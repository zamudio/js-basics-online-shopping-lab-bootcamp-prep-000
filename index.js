var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //create object from item
  //define itemName and itemPrice??
  //itemPrice = Math.floor(Math.random())
  //object has {itemName: "", itemPrice: x}
  //cart = [{itemName, itemPrice}, {itemName2, itemPrice2//{itemName3, itemPrice3}]
  //each add returns "<itemName> has been added to your cart."
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
  
  return 71 //REMOVE THIS!!!!!
}

function removeFromCart(item) {
  //if there is THE item do actions below, else return "That //item is not in your cart"
  //if .indexOf = -1, item doesn't exist
  // if .indexOf = 0+, item exists and returns index number //where item is located
  //check to see if items match
  //use array.splice() to remove
  //return updated cart
  
  if (cart.indexOf(item) === -1) {
    return "That item is not in your cart"
  }
  else {
    var currentItemIndex = cart.indexOf(item)
    cart.splice(currentItemIndex)
    return cart
  }
}

function placeOrder(cardNumber) {
  if (!!cardNumber) {
    cart = []
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
}

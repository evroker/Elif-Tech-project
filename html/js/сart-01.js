// Retrieve the cart items from localStorage or initialize an empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to render the cart items on the page
function renderCartItems() {
  const cartItemsElement = document.getElementById('cartItems');
  cartItemsElement.innerHTML = '';

  // Iterate over the cartItems array and create list items for each item
  cartItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} (Quantity: ${item.quantity})`;
    cartItemsElement.appendChild(listItem);
  });
}

// Function to save the cart items to localStorage
function saveCartItems() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to add an item to the cart
function addToCart(imageUrl, itemName, quantity) {
    const item = {
      imageUrl,
      name: itemName,
      quantity: parseInt(quantity)
    };
  
    cartItems.push(item);
    saveCartItems();
    renderCartItems();
}

// Function to clear the cart
function clearCart() {
  cartItems = [];
  saveCartItems();
  renderCartItems();
}

// Function to process the cart (you can implement the desired logic here)
function processCart() {
  // Add your logic for processing the cart items here
  console.log('Processing cart:', cartItems);
}

// Event listener for the clear cart button
document.getElementById('clearCart').addEventListener('click', clearCart);

// Event listener for the process cart button
document.getElementById('processCart').addEventListener('click', processCart);

// Render the cart items on page load
renderCartItems();

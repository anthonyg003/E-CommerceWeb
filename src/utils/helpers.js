export const addToCart = (cartItems, productId) => {
  //checks if the item is already in cart array
  const existingCartItem = cartItems.findIndex(
    //checks if product id matches
    (item) => item.productId === productId
  );
  //if existingCartItem does not equal -1 it runs code
  if (existingCartItem !== -1) {
    // ... makes a copy of the existing cart
    const updatedCart = [...cartItems];
    // adds 1 to the quantity of the existing item
    updatedCart[existingCartItem].quantity += 1;
    return updatedCart;
  } else {
    //creates new object with a quantity of 1
    const newItem = { productId, quantity: 1 };
    // makes a copy of the cart and adds the new item inside array
    return [...cartItems, newItem];
  }
};

export const removeCartItem = (cartItems, productId) => {
  //checks if the item is already in the cart array
  const existingCartItem = cartItems.findIndex(
    //checks if product id matches
    (item) => item.productId === productId
  );
  //if item exists and item quantity is greater than 1 it runs code
  if (existingCartItem !== -1 && cartItems[existingCartItem].quantity > 1) {
    // loops over all cart items
    const updatedCart = cartItems.map((item) => {
      //checks if item id matches the product id passed in
      if (item.productId === productId) {
        //if id matches, decreases quantity by 1
        return { ...item, quantity: item.quantity - 1 };
      } else {
        // if item does not match, does nothing and returns item
        return item;
      }
    });
    return updatedCart;
  } else if (
    //if item exists and item quantity is equal to 1 it runs code
    existingCartItem !== -1 &&
    cartItems[existingCartItem].quantity === 1
  ) {
    const updatedCart = cartItems.filter((item) => {
      return item.productId !== productId;
    });
    return updatedCart;
  } else {
    return;
  }
};

export const editCartItemQuantity = (cartItems, productId, newQuantity) => {
  const existingCartItem = cartItems.findIndex((item) => {
    return item.productId === productId;
  });
  //if item exists in cart it runs code
  if (existingCartItem !== -1) {
    //makes copy of cart array
    const updatedCart = [...cartItems];
    //updates quantity of the item
    updatedCart[existingCartItem].quantity = newQuantity;
    return updatedCart;
  } else {
    return cartItems;
  }
};

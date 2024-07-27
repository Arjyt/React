import React from 'react';

function Cart(props) {
  function removeFromCart(itemToRemove) {
    const updatedCartData = props.cartData.filter(item => item !== itemToRemove);
    // Update the cart data state
    props.setCartData(updatedCartData);
    props.setActiveButton('buy');
  }

  const cartRslt = props.cartData.map((itemName) => {
    // Find the item object based on its name
    const item = props.allProduct.find((product) => product.title === itemName);

    // Render the item details if found
    if (item) {
      return (
        <div key={item.title} className="cart-item">
          <img src={item.image} alt={item.title} />
          <h5>{item.title}</h5>
          <h6>$ {item.price}</h6>
          <a href="#" className="button">Buy</a>
          <a onClick={() => removeFromCart(item.title)} href="#" className="buttontwo">Remove</a>
        </div>
      );
    } else {
      // Render a message if the item is not found (optional)
      return (
        <div key={itemName} className="cart-item">
          <p>Item not found: {itemName}</p>
        </div>
      );
    }
  });

  return (
    <div className='cart'>
      <div className="cart-sub">
        {cartRslt}
      </div>
    </div>
  );
}

export default Cart;

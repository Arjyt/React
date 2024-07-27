import React, { useState } from 'react';
import Cart from './components/Cart';
import Details from './components/Details';

function Popup(props) {
  const [cartShow, setCartShow] = useState(false);
  const [buyShow, setBuyShow] = useState(false);
  const [img, setImg] = useState('');

  function showCart() {
    setCartShow(prevButton => !prevButton);
  }

  function close() {
    props.setShow(false);
  }

  let product = props.products;
  let result = product.filter(item => props.image === item.image).map(item => (
    <>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span><h5>{item.price} $</h5></span>
      <button onClick={() => toggleActive('buy', item.id, item.title, item.image)} className={props.activeButton[item.id] === 'buy' ? 'active' : ''}>Buy</button>
      <button onClick={() => toggleActive('cart', item.id, item, item.image)} className={props.activeButton[item.id] === 'cart' ? 'active' : ''}>
        {props.activeButton[item.id] === 'cart' ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </>
  ));

  function toggleActive(buttonType, itemId, item, image) {
    setBuyShow(buttonType === 'buy');
    if (props.activeButton[itemId] === buttonType) {
      // If the button is already active, deactivate it
      props.setActiveButton(prevButtons => ({ ...prevButtons, [itemId]: '' }));
      setImg('');
    } else {
      // Otherwise, activate it
      props.setActiveButton(prevButtons => ({ ...prevButtons, [itemId]: buttonType }));
      if (buttonType === 'cart') {
        setBuyShow(false);
        props.setCartData(prevItems => [...prevItems, item.title]);
      } else if (buttonType === 'buy') {
        setImg(image);
      }
    }
  }

  return (
    <div className='popup'>
      <svg className='icon' onClick={showCart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
      <button className='button1' onClick={close}>close</button>
      <div className="popup-sub">
        <img src={props.image} alt="" />
        <div className="popup-head">
          {result}
        </div>
      </div>
      {cartShow ? <Cart cartData={props.cartData} allProduct={props.product} setCartData={props.setCartData} setActiveButton={props.setActiveButton}/> : ""}
      {buyShow ? <Details image={img} /> : ""}
    </div>
  );
}

export default Popup;

import React, { useState } from 'react';
import Confirm from '../components/confirm'

function Details(props) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [showConfirm, setShowConfirm] = useState(false); // State to control the visibility of the Confirm component

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, address, city, postalCode });
    setName('');
    setAddress('');
    setCity('');
    setPostalCode('');
    setShowConfirm(true); // Set showConfirm to true when form is submitted
  };

  return (
    <div className='details'>
      <h2>Shipping Details</h2>
      <img src={props.image} alt="" />
      <form onSubmit={handleSubmit}>
        <div className='details-sub'>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input 
            type="text" 
            id="address" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input 
            type="text" 
            id="city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input 
            type="text" 
            id="postalCode" 
            value={postalCode} 
            onChange={(e) => setPostalCode(e.target.value)} 
            required 
          />
        </div>
        <button className='bt' type="submit">Confirm</button>
      </form>
      {showConfirm && <Confirm />} {/* Render Confirm component if showConfirm is true */}
    </div>
  );
}

export default Details;

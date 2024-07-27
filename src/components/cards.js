import React from 'react'
import { useState } from 'react'
import Popup from '../Popup'
import Confirm from './confirm';

function Cards(props) {
  const [activeButton, setActiveButton] = useState('');
  const[show,setShow]=useState(false)
  const[image,setImage]=useState([])
  const[cartData,setCartData]=useState([])
  function showPopup(object){
    setShow(true)
    setImage(object)
  }
  
 

  let card = props.product.map((item) => {
    return (
        <div class="card" >
        <img src={item.image}class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.description}</p>
          <a href="#"  onClick={()=>{showPopup(item.image)}} class="btn btn-primary">Buy</a>
        </div>
      </div>
    )
  })

  return (
  <div className='cards-main'>
    {card}
    {show==true?<Popup image={image} products={props.product} setShow={setShow} product={props.product} setCartData={setCartData} cartData={cartData} activeButton={activeButton} setActiveButton={setActiveButton} />:""}
  </div>
  )
}
export default Cards
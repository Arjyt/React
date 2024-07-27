import React from 'react'
import confirm from '../assets/confirm.png'

function Confirm() {
  return (
    <div className='confirmation'>
     
        <img src={confirm} alt="" />
        <button className='seemore'>Go BACk</button>
    </div>
  )
}

export default Confirm
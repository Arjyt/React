import React from 'react'
import banner from '../assets/banner.png'

function Content() {
  return (
    <div className='content'>
        <div className="heading">
            <h1>Summer Sale</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, natus.</p>
        </div>
        <div className="image">
        <img src={banner} alt="" />
        </div>
       
    </div>
  )
}

export default Content
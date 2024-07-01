import React from 'react'
import { Outlet } from 'react-router-dom'
import cake from '../../assets/cake.png'

import stars from '../../assets/stars.svg'


import './Cake.css'
function Cake() {
  return (
    <div className='cake-cards'>

      <div className="cake-card">
        <img className='cake-card-img' src={cake} alt="lagman1" />
        <h2 className='cake-card-h2'> Fruit cake </h2> <br />
        <p className='cake-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='cake-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="cake-price">
          <h1 className='cake-card-price'>$5.08</h1>
          <button className='cake-btn'>+</button>
        </div>
      </div>

      <div className="cake-card">
        <img className='cake-card-img' src={cake} alt="lagman1" />
        <h2 className='cake-card-h2'> Chocolate cake </h2> <br />
        <p className='cake-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='cake-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="cake-price">
          <h1 className='cake-card-price'>$5.08</h1>
          <button className='cake-btn'>+</button>
        </div>
      </div>

      <div className="cake-card">
        <img className='cake-card-img' src={cake} alt="lagman1" />
        <h2 className='cake-card-h2'> White cake </h2> <br />
        <p className='cake-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='cake-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="cake-price">
          <h1 className='cake-card-price'>$5.08</h1>
          <button className='cake-btn'>+</button>
        </div>
      </div>

      <div className="cake-card">
        <img className='cake-card-img' src={cake} alt="lagman1" />
        <h2 className='cake-card-h2'> Birthday cake </h2> <br />
        <p className='cake-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='cake-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="cake-price">
          <h1 className='cake-card-price'>$5.08</h1>
          <button className='cake-btn'>+</button>
        </div>
      </div>



      <Outlet />
    </div>
  )
}

export default Cake
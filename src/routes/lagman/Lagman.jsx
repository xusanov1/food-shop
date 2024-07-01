import React from 'react'
import { Outlet } from 'react-router-dom'
import lagman1 from '../../assets/lagman1.png'
import lagman2 from '../../assets/lagman2.png'
import lagman3 from '../../assets/lagman3.png'
import stars from '../../assets/stars.svg'


import './Lagman.css'
function Lagman() {
  return (
    <div className='lagman-cards'>

      <div className="lagman-card">
        <img className='lagman-card-img' src={lagman1} alt="lagman1" />
        <h2 className='lagman-card-h2'>Chinese Yakisbo </h2> <br />
        <p className='lagman-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='lagman-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="lagman-price">
          <h1 className='lagman-card-price'>$5.08</h1>
          <button className='lagman-btn'>+</button>
        </div>      </div>

      <div className="lagman-card">
        <img className='lagman-card-img' src={lagman1} alt="lagman1" />
        <h2 className='lagman-card-h2'>Fried Noodles </h2> <br />
        <p className='lagman-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='lagman-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="lagman-price">
          <h1 className='lagman-card-price'>$5.08</h1>
          <button className='lagman-btn'>+</button>
        </div>      </div>

      <div className="lagman-card">
        <img className='lagman-card-img' src={lagman1} alt="lagman1" />
        <h2 className='lagman-card-h2'>Chinese Yakisbo </h2> <br />
        <p className='lagman-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='lagman-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="lagman-price">
          <h1 className='lagman-card-price'>$5.08</h1>
          <button className='lagman-btn'>+</button>
        </div>      </div>

      <div className="lagman-card">
        <img className='lagman-card-img' src={lagman1} alt="lagman1" />
        <h2 className='lagman-card-h2'>Chinese Yakisbo </h2> <br />
        <p className='lagman-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='lagman-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="lagman-price">
          <h1 className='lagman-card-price'>$5.08</h1>
          <button className='lagman-btn'>+</button>
        </div>
      </div>


      <Outlet />
    </div>
  )
}

export default Lagman
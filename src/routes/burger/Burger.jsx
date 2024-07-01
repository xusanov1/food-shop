import React from 'react'
import { Outlet } from 'react-router-dom'
import burger from '../../assets/hamburger .png'

import stars from '../../assets/stars.svg'


import './Burger.css'
function Burger() {
  return (
    <div className='burger-cards'>

      <div className="burger-card">
        <img className='burger-card-img' src={burger} alt="lagman1" />
        <h2 className='burger-card-h2'>Hamburger</h2> <br />
        <p className='burger-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='burger-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="burger-price">
          <h1 className='burger-card-price'>$5.08</h1>
          <button className='burger-btn'>+</button>
        </div>
      </div>

      <div className="burger-card">
        <img className='burger-card-img' src={burger} alt="lagman1" />
        <h2 className='burger-card-h2'>Delicious Hamburger </h2> <br />
        <p className='burger-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='burger-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="burger-price">
          <h1 className='burger-card-price'>$5.08</h1>
          <button className='burger-btn'>+</button>
        </div>
      </div>

      <div className="burger-card">
        <img className='burger-card-img' src={burger} alt="lagman1" />
        <h2 className='burger-card-h2'>Chinese Hamburger </h2> <br />
        <p className='burger-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='burger-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="burger-price">
          <h1 className='burger-card-price'>$5.08</h1>
          <button className='burger-btn'>+</button>
        </div>
      </div>

      <div className="burger-card">
        <img className='burger-card-img' src={burger} alt="lagman1" />
        <h2 className='burger-card-h2'>Usa Delicious Hamburger </h2> <br />
        <p className='burger-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='burger-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="burger-price">
          <h1 className='burger-card-price'>$5.08</h1>
          <button className='burger-btn'>+</button>
        </div>
      </div>

      



      <Outlet />
    </div>
  )
}

export default Burger
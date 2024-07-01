import React from 'react'
import { Outlet } from 'react-router-dom'
import drink from '../../assets/drink.png'
import stars from '../../assets/stars.svg'


import './Drink.css'
function Drink() {
  return (
    <div className='drink-cards'>

      <div className="drink-card">
        <img className='drink-card-img' src={drink} alt="lagman1" />
        <h2 className='drink-card-h2'> Iced drinks </h2> <br />
        <p className='drink-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='drink-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="drink-price">
          <h1 className='drink-card-price'>$5.08</h1>
          <button className='drink-btn'>+</button>
        </div>
      </div>

      <div className="drink-card">
        <img className='drink-card-img' src={drink} alt="lagman1" />
        <h2 className='drink-card-h2'> Moxitos </h2> <br />
        <p className='drink-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='drink-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="drink-price">
          <h1 className='drink-card-price'>$5.08</h1>
          <button className='drink-btn'>+</button>
        </div>
      </div>

      <div className="drink-card">
        <img className='drink-card-img' src={drink} alt="lagman1" />
        <h2 className='drink-card-h2'> Juices </h2> <br />
        <p className='drink-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='drink-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="drink-price">
          <h1 className='drink-card-price'>$5.08</h1>
          <button className='drink-btn'>+</button>
        </div>
      </div>

      <div className="drink-card">
        <img className='drink-card-img' src={drink} alt="lagman1" />
        <h2 className='drink-card-h2'>carbonated waters </h2> <br />
        <p className='drink-card-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> <br />
        <span><img className='drink-card-star' src={stars} alt="stars" />   4.5</span> <br />
        <div className="drink-price">
          <h1 className='drink-card-price'>$5.08</h1>
          <button className='drink-btn'>+</button>
        </div>
      </div>


      <Outlet />
    </div>
  )
}

export default Drink
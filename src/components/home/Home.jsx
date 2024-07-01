import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFire } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { CgNotifications } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuTicket } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import heroImg from '../../assets/hero.png';
import lagman from '../../assets/lagman.svg';
import cake from '../../assets/cake.svg';
import burger from '../../assets/Hamburger.svg';
import drink from '../../assets/drink.svg';




import "./Home.css";

const Home = () => {
  return (
    <div className="wrapper">

      <nav className='sidebar-nav'>
        <ul className='sidebar-list'>
          <li className='list-item'>  <NavLink to="/"><FaFire /></NavLink> </li> 
          <li className='list-item'> <NavLink to="/"><TiHome /></NavLink> </li>
          <li className='list-item'> <NavLink to="/"><CgNotifications /></NavLink> </li>
          <li className='list-item'> <NavLink to="/"><FaRegHeart /></NavLink> </li>
          <li className='list-item'>  <NavLink to="/"><HiOutlineShoppingBag /></NavLink> </li>
          <li className='list-item'> <NavLink to="/"><LuTicket /></NavLink> </li>
          <li className='list-item'> <NavLink to="/"><IoSettingsOutline /></NavLink> </li>
        </ul>
      </nav>

      <div className="wrapper-left">

      <div className="home-up">
        <div className="welcome">
          <h1>Welcome, Ali 👋</h1> <br />
          <p>Discover whatever you need</p>
        </div>
        <div className="search">
          <input type="text" placeholder='Search ' />
        </div>
      </div>

      <div className="hero">
        <div className="hero-text">
          <h1 className='hero-h1'>It’s not just Food, it’s an <br /> Experience </h1>
          <p className='hero-p'>Order Your Favourite food & enjoy your day</p>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="hero img" />
        </div>
      </div>

      <div className="categories">
        <NavLink to={'/lagman'}> <button className='categories-btn'><img src={lagman} alt="lagman img" />  Noodles</button></NavLink>
        <NavLink to={'/burger'}><button className='categories-btn'> <img src={burger} alt="burger img" />  Burger</button></NavLink>
        <NavLink to={'/drink'}><button className='categories-btn'> <img src={drink} alt="drink img" />  Drink</button></NavLink>
        <NavLink to={'/cake'}><button className='categories-btn'> <img src={cake} alt="cake img" /> Desert</button></NavLink>


      </div>



      </div>

     </div>
  )
}

export default Home
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.png';
//import vid from "../assets/Free Video Footage _ Royalty Free _ NATURE person watering a small plant by hand.mp4";
import '../Styles/banner.css';
const Banner = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
    const title = 'Cacty plant';
  return (
   <div className='banner'>
    <div className='cacty__Banner'>
       <img src={logo} alt='cacty plant' className='cacty__logo'/>
       <h1 className='cacty__title'>{title}</h1>
       <div className="cacty__navbar">
      <div className="cacty__navbar-links">
        <div className="cacty__navbar-links_container">
          <p><a href="/">Home</a></p>
          <p><a href="/profile">profile</a></p>
          <p><a href="/ShoppingList">List plants</a></p>
          <p><a href="/Cart">Cart</a></p>
        </div>
      </div>
      <div className="cacty__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="cacty__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="cacty__navbar-menu_container scale-up-center">
          <div className="cacty__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
   
  </div>
    
    </div>
    
  )
}

export default Banner;

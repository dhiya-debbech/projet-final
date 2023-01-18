import React from 'react'
import logo from '../assets/logo.png';
import vid from "../assets/Free Video Footage _ Royalty Free _ NATURE person watering a small plant by hand.mp4"
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
    <div className='overlay'>
        <video src={vid} autoPlay loop mute="true"/>
        <div className="content" >
            <h1>Welcome </h1>
            <img src={logo} alt='cacty plant' className='cacty__logo'/> <span>to Cacty-plante</span>
           
            <p className="p-home">Cacty-plante is a paltform for selling plant online</p>
           <Link to="/login"> <button className="button-17">login</button></Link>
           <Link to="/register"> <button className="button-17" style={{width:"200px"}}>register</button></Link>
        </div>
    </div>
      
    </div>
  )
}

export default Home

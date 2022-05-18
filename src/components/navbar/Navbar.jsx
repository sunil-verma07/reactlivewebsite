import React, { useState } from 'react'
import './navbar.css'
import {RiCloseLine} from 'react-icons/ri'
import {AiOutlineBars} from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleNavLink =()=>{
        setOpen(!open);
    }
  return (
    <>
    <div className="navbar">
        <div className="logo">SocialX</div>
        <div className="nav-items">
            <ul  id={ open? "nav-items-open" :"nav-items-close"}>
                <li><a href="#">home</a></li>
                <li><a href="#features">features</a></li>
                <li><a href="#download">download</a></li>
                <li><a href="#subscribe">subscribe</a></li>
                <li><a href="#faq" className="button">Learn more</a></li>
            </ul>
            
        </div>
        <div className="navlinks" onClick={toggleNavLink}>{
                open? <RiCloseLine color="white" size={30}/> : <AiOutlineBars color="white" size={30}/> }
            </div>
        
       
    </div>
    </>
  )
}

export default Navbar
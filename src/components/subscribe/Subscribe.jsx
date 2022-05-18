import React from 'react'
import './subscribe.css'
import {SiGmail,SiFacebook,SiTwitter,SiInstagram} from 'react-icons/si'

const Subscribe = () => {
  return (
    <div className="sub">
<div className="container" data-aos="fade-up" id="subscribe">
    <h1>subscribe now!</h1>
    <label>
    <input type="email" placeholder='Enter you Email...' />
    <button classname="button">Subscribe
    </button>
    </label>
    <div className="links">
        <ul>
            <li><a href="#" id="gmail"><SiGmail/></a>
            </li>
            <li><a href="#"><SiFacebook/></a>
            </li>
            <li><a href="#"><SiTwitter/></a>
            </li>
            <li><a href="#" id="insta"><SiInstagram/></a>
            </li>
        </ul>
    </div>
</div>
    </div>
  )
}

export default Subscribe
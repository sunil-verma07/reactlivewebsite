import React from 'react'
import './download.css'
import {AiFillApple , AiFillAndroid , AiFillWindows} from'react-icons/ai'

const Download = () => {
  return (
    <div className="download" id="download" >
        <div className="container" data-aos="fade-up" data-aos-offset="10">
        <h1>
            socialx messenger download
        </h1>
        <p>Our apps are available for Download on all Stores.</p>
        <div className="buttongroup">
            <div className="button" id="ios"><AiFillApple/>IOS</div>
            <div className="button" id="android"><AiFillAndroid/>Android</div>
            <div className="button" id="windows"><AiFillWindows/>Windows</div>

        </div>
        </div>
    </div>
  )
}

export default Download
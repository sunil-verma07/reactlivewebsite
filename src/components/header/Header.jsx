import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className="header">
        <div className="wrapper">
            <div className="content">
                <h1 id="boldtext">the world's leading</h1>
                <h1 id="thintext">cross platform secure <br /> messaging system </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eaque, nesciunt?
                    Lorem ipsum dolor sit amet.
                </p>
                <div className="buttongroup">
                    <div className="button" id="first"><a href="#download">get started</a></div>
                    <div className="button" id="second"><a href="#faq">how it works</a></div>
                </div>
            </div>
            <div className="container">
                <div className="image"></div>
            </div>
        </div>
    </div>
  )
}

export default Header
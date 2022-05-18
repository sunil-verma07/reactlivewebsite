import React from 'react'
import './footer.css'
import {MdLocationPin} from'react-icons/md'
import {FaFax,FaInternetExplorer} from'react-icons/fa'
import {AiFillPhone,AiTwotoneMail} from'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="list useful-links">
            <h4>useful links</h4>
            <ul>
                <li><a href="#">support</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">learn</a></li>
                <li><a href="#">hosting</a></li>
                <li><a href="#">messenger</a></li>
            </ul>
            </div>
            <div className="list support">
                <h4>support</h4>
            <ul>
                <li><a href="#">support</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">learn</a></li>
                <li><a href="#">hosting</a></li>
                <li><a href="#">messenger</a></li>
            </ul>
            </div>
            <div className="list contact-us">
                <h4>contact us</h4>
            <ul>
                <li><a href="#"><MdLocationPin/> address : India</a></li>
                <li><a href="#"><AiFillPhone/> phone: 0000-1111</a></li>
                <li><a href="#"><FaFax/> fax: 123456789</a></li>
                <li><a href="#"><AiTwotoneMail/> email: info@socialx.com</a></li>
                <li><a href="#"><FaInternetExplorer/> website : www.socialx.com</a></li>
            </ul>

            </div>
        </div>
    </div>
  )
}

export default Footer
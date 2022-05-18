import React from 'react'
import './features.css'
import {BsFillBookmarkStarFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

const Features = () => {
  return (
    <div className="features" id="features">
        <div className="wrapper" data-aos="fade-up">
            <div className="icon"><BsFillBookmarkStarFill/></div>
            <h1>core features</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos beatae odio eaque dolor quas,<br/> iure quaerat tempora alias provident? Perspiciatis.</p>
        </div>
        <div className="block">
        <div className="image" data-aos="fade-right"></div>
        <div className="content" data-aos="fade-left">
            <ul>
                <li>
                    <div className="list-style"><BsFillArrowRightCircleFill/></div>
                    <div className="line">
                        <div className="heading">
                        designed for you
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio architecto quaerat autem ut magnam cumque delectus, vel enim magni recusandae.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="list-style"><BsFillArrowRightCircleFill/></div>
                    <div className="line">
                        <div className="heading">
                        keep your history
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio architecto quaerat autem ut magnam cumque delectus, vel enim magni recusandae.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="list-style"><BsFillArrowRightCircleFill/></div>
                    <div className="line">
                        <div className="heading">
                        stay connected
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio architecto quaerat autem ut magnam cumque delectus, vel enim magni recusandae.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="list-style"><BsFillArrowRightCircleFill/></div>
                    <div className="line">
                        <div className="heading">
                        take control
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio architecto quaerat autem ut magnam cumque delectus, vel enim magni recusandae.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Features
import React, { useState } from 'react'
import { questions } from './api'
import Accordian from './Accordian'
import './faq.css'
import {BsFillPatchQuestionFill} from 'react-icons/bs'

const FAQ = () => {
  const [data, setData] = useState(questions)
  return (
    <div className="faq" data-aos="fade-up" id="faq">
      <div className="container">
        <div className="logo"><BsFillPatchQuestionFill/></div>
        <h1>FAQS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Veritatis rerum aperiam facere eum, beatae temporibus quibusdam est explicabo in qui?</p>
        <div className="accordianbox">
          {
            data.map((element)=>{
              const {id} = element;
              return <Accordian key={id} {...element}/>
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default FAQ
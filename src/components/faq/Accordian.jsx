import React, { useState } from 'react'
import './accordian.css'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const Accordian = ({ question, answer}) => {
    const [show , setShow] = useState(false)
  return (
      <>
    <div className="accordian">
        <h2>{question} <p className="button" onClick ={()=>{setShow(!show)}}>{show ? <AiOutlineMinus/>:<AiOutlinePlus/> }</p></h2>
        
        <h3>{
            show && <p className="answers">{answer}</p>
            }
            </h3>
            </div>
            </>
  )
}

export default Accordian
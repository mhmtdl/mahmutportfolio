import React from 'react'
import { FaReact,FaHtml5,FaCss3Alt,FaNode } from "react-icons/fa";
import {SiJavascript,SiMongodb} from 'react-icons/si';
const Technologies = () => {
    return (
        <div className='techno'>
        <div className='container'>
            <div className='common'>
                <h1 className='mainHeader'>Technologies</h1>
                <div className='commonBorder'></div>
            </div>
            <div className='info__tech'>
                <div className='row'>
                <div className='col-6'>
                <ul className='skills'>
                  
                  <li className='html'> <FaHtml5/></li>
                  <li className='css'>
                    <FaCss3Alt/></li>
                  <li className='java'><SiJavascript/></li>
                  <li className='node'> 
                    <FaNode/></li>
                  <li className='express'><img src='/images/logo-express-js.png' alt='express'/></li>
                  <li className='mongo'>
                    <SiMongodb/></li>
                  <li className='react'> 
                    <FaReact/></li>
                   
                </ul>
                   
                   
                   

                </div>

                </div>
            </div>
        </div>
        
        </div>
    )
}

export default Technologies

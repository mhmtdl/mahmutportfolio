import React from 'react'
import { FaReact,FaHtml5,FaCss3Alt,FaNode } from "react-icons/fa";
import {SiJavascript,SiMongodb} from 'react-icons/si';
import {Container ,Row, Col} from 'react-bootstrap';
const Technologies = () => {
    return (
       <section id='technologies-section'>
       <div className='techno'>
        <div className='container'>
            <div className='common'>
                <h1 className='mainHeader'>Technologies</h1>
                <div className='commonBorder'></div>
            </div>
            <div>
            <Container fluid  >
                <Row >
                <Col md={12} className='skills' >
               
                

                  <span className='html'><FaHtml5/></span> 
                   
                   <span className='css'><FaCss3Alt/></span> 
                  <span className='java'><SiJavascript/></span>  
                 
                 <span className='express'><img className='express' src='/images/logo-express-js.png' alt='express'/></span>
                 
                 <span className='node'> <FaNode/></span>
                   
                   
                   
                    
                  
                <span className='mongo'><SiMongodb/></span>
                    
                  <span className='react'> <FaReact/></span>
                   
                   
                  
                    </Col>
                   
                   

                
               
                </Row>
                </Container>
            </div>
           
            
        </div>
        
        </div>
        </section>
    )
}

export default Technologies

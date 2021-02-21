import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
    const [header] = React.useState({
        subHeader:'About Me',
        
    });

    const [state] = React.useState([
        {id:1,title:'Name:',text:'Mahmut Sarcan'},
        {id:2,title:'Phone:',text:'+31 615175765'},
        {id:3,title:'Email:',text:'mhmtsrcn58@hotmail.com'},
        
        
    ])

   
    return (
        <section id='about-section'>
        <div className='about'>
        <div className='container'>
        <div className='common'>
            <h1 className='mainHeader'>{header.subHeader}</h1>
            <p className='mainContent'>{header.text}</p>
            <div className='commonBorder'></div>
        </div>
       
        <Container fluid className='about-container'>
        <Row className='about-row'>
        <Col md={5}>
          <div >
          <img className='profile-img' src='/images/renk.jpg'alt='renk'/>
          </div>

        </Col>
        <Col md={7} >
         <div className='about-content'>
         <div>
            <div className='about-text'>
                {/* <h1>Hi There</h1> */}
                <p>
                I am a full stack developer looking to deepen my knowledge and gain experience in both Front End and Back End web design. I am looking for an intern or entry level position as a developer/designer.
I have a background in engineering & pharmaceuticals sales, I developed strong skills on subjects related to Design Thinking, Creativity, providing out of the box Solutions that meet both user and business needs.
                
                <br/>
                <br/> 
                
                I will bring the following competencies to my new role:
- Front-end development – HTML5/CSS3, JavaScript ES6, Bootstrap, ReactJS
- Back-end development - Node.js, ExpressJS, MongoDB
- Learning ability and enthusiasm to master new technologies and tools
                  </p>
                  </div>
              <div className='info__contacts'>
                  <div className='row'>
                      {state.map(info=>(
                        <div key={info.id} className='col-6'>
                       <strong>{info.title}</strong>
                       <p>{info.text}</p>

                      </div>
                      ))}
                      
                      
                  </div>
              </div>
            

            </div>
         </div>

        </Col>

        </Row>

        </Container>


        </div>
        </div>
        </section>
    )
}

export default About

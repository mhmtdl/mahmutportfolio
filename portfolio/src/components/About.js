import React from 'react'

const About = () => {
    const [header] = React.useState({
        subHeader:'About Me',
        text:'Lorereemeememeem fcvvmvfvfvfvfd fvdvfdvfdvfd fddfvfdvdvfd fvfvfdvfdkbdf'
    });

    const [state] = React.useState([
        {id:1,title:'Name:',text:'Mahmut Sarcan'},
        {id:2,title:'Email:',text:'mhmtsrcn58@hotmail.com'},
        {id:3,title:'Phone:',text:'+31 615175765'},
        {id:4,title:'Linkedin:',text:'mahmutsarcan'},
        
    ])

   
    return (
        <div className='about'>
        <div className='container'>
        <div className='common'>
            <h1 className='mainHeader'>{header.subHeader}</h1>
            <p className='mainContent'>{header.text}</p>
            <div className='commonBorder'></div>
        </div>
        <div className='row h-650 alignCenter'>
            <div className='col-6 '>
                <div className='about__img'>
                    <img className='mahmut' src='/images/renk.jpg'alt='renk'/>
                </div>
            </div>
            <div className='col-6'>
            <div className='about__info'>
                <h1>Hi There</h1>
                <div className='about__info-p1'>
                I am a full stack developer looking to deepen my knowledge and gain experience in both Front End and Back End web design. I am looking for an intern or entry level position as a developer/designer.
I have a background in engineering & pharmaceuticals sales, I developed strong skills on subjects related to Design Thinking, Creativity, providing out of the box Solutions that meet both user and business needs.
                </div>
                <div className='about__info-p2'>
                I will bring the following competencies to my new role:
- Front-end development – HTML5/CSS3, JavaScript ES6, Bootstrap, ReactJS
- Back-end development - Node.js, ExpressJS, MongoDB
- Learning ability and enthusiasm to master new technologies and tools

                </div>
              <div className='info__contacts'>
                  <div className='row'>
                      {state.map(info=>(
                        <div className='col-6'>
                       <strong>{info.title}</strong>
                       <p>{info.text}</p>

                      </div>
                      ))}
                      
                      
                  </div>
              </div>
            </div>

            </div>
        </div>
        </div>
        </div>
    )
}

export default About

import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

const Projects = () => {
    return (
       <section id='project-section'>
       <div className='projects'>
        <div className='container'>
            <div className='common'>
                <h1 className='mainHeader'>Projects</h1>
                <div className='commonBorder'></div>
            </div>
            <div className='slides'>
            <Carousel>
  <Carousel.Item>
  <a href='https://github.com/mhmtdl/Ironhack-Project-1-Quiz-Game' target='_blank' rel=' noopener noreferrer'><img
      className="d-block w-100"
      src='/images/quizgame(4).PNG'
      alt="First slide"
    /></a>
    
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a href='https://github.com/mhmtdl/Tunelmusicapp' target='_blank' rel=' noopener noreferrer'><img
      className="d-block w-100"
      src="/images/tunelproject.jpg"
      alt="Third slide"
    /></a>
    

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a href='https://github.com/mhmtdl/musica' target='_blank' rel='noopener noreferrer'><img
      className="d-block w-100"
      src="/images/musica(3).PNG"
      alt="Third slide"
    /></a>
    

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        </div>
            
        </div>
        </section>
    )
}

export default Projects
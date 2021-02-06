import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

const Projects = () => {
    return (
        <div className='projects'>
        <div className='container'>
            <div className='common'>
                <h1 className='mainHeader'>Projects</h1>
                <div className='commonBorder'></div>
            </div>
            <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='/images/quizgame(4).PNG'
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/tunelproject.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/musica(3).PNG"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        </div>
            
        </div>
    )
}

export default Projects

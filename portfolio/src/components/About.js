import React from 'react'

const About = () => {
    const [state] = React.useState({
        subHeader:'About Me',
        text:'Lorereemeememeem fcvvmvfvfvfvfd fvdvfdvfdvfd fddfvfdvdvfd fvfvfdvfdkbdf'
    })
   
    return (
        <div className='about'>
        <div className='container'>
        <div className='common'>
            <h1 className='mainHeader'>{state.subHeader}</h1>
            <p className='mainContent'>{state.text}</p>
            <div className='commonBorder'></div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <div className='about__img'>
                    <img src='/images/renk (3).jpg'alt='renk'/>
                </div>
            </div>
            <div className='col-6'>

            </div>
        </div>
        </div>
        </div>
    )
}

export default About

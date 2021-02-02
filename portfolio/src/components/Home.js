import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedin,FaGithub,FaPlay} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi';

const Home = () => {
    const [state] = React.useState({title:'I am Mahmut Sarcan',
    text:'Full Stack Developer',
    image:'/images/DSC_0068new (6).jpg'})
    return (
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                    <div className='header__content'>
                    <div className='header__section'>
                    <ul className='header__ul'>
                            <li>
                                <FaFacebookF/>
                            </li>
                            <li>
                                <FaTwitter/>
                            </li>
                            <li>
                                <FaInstagram/>
                            </li>
                            <li>
                                <FaLinkedin/>
                            </li>
                            <li>
                                <FaGithub/>
                            </li>
                            <li>
                                <FiMail/>
                            </li>
                            
                        </ul>
                        <h1>{state.title}</h1>
                        <p>{state.text}</p>
                        <div className='header__buttons'>
                        <a href='/' className='btn btn-outline'>Download Resume</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href='/' className='btn btn-smart'> <FaPlay className='play'/> </a>
                        </div>
                    </div>
                       
                    </div>
                    </div>
                    <div className='col-6'>
                    <div className='banner__img'>
                        <img src={state.image} alt='mahmut'/>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;
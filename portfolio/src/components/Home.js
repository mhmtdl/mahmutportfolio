import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedin,FaGithub,FaPlay} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi';

const Home = () => {
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
                        <h1>I am Mahmut Sarcan</h1>
                        <p>Full Stack Developer</p>
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
                        <img src='/images/DSC_0068new (6).jpg' alt='mahmut'/>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;
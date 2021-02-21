import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedin,FaGithub,FaPlay} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi';


const Home = () => {
    const [state] = React.useState({title:'I am Mahmut Sarcan',
    text:'Full Stack Developer',
    image:'/images/maho (2).jpg'})
    return (
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                    <div className='header__content'>
                    <div className='header__section'>
                    <ul className='header__ul'>
                            <li>
                            <a href='https://www.linkedin.com/in/mahmutsarcan/'
                            target='_blank' rel='noopener noreferrer' className='linkedin'><FaLinkedin/></a>
                               
                            </li>
                            <li>
                          
                            <a href='https://github.com/mhmtdl' 
                            target='_blank' rel='noopener noreferrer' className='github' > <FaGithub/></a>
                               
                            </li>
                            <li>
                            
                            <a href='mailto:mhmtsrcn58@hotmail.com' 
                             className='mail'><FiMail/></a>
                            </li>
                            <li>
                            <a href='https://www.facebook.com/mahmut.sarcan.9' 
                            target='_blank' rel='noopener noreferrer' className='facebook'><FaFacebookF/></a>
                            
                            </li>
                            <li>
                            <a href='https://twitter.com/mhmt_srcn' target='_blank' rel='noopener noreferrer'> <FaTwitter/></a>
                               
                            </li>
                            <li>
                           <a href='https://www.instagram.com/mhmtsrcn58/' className='instagram' target='_blank' rel='noopener noreferrer'><FaInstagram/></a>
                           
                                
                            </li>
                            
                        </ul>
                        <h1>{state.title}</h1>
                        <p>{state.text}</p>
                        <div className='header__buttons'>
                        <a href='/images/mahmut sarcan ironhackcv.pdf' download  className='btn btn-outline'>Download Resume</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href='https://www.youtube.com/watch?v=ksC0XnJCZ14&feature=youtu.be' className='btn btn-smart' target='_blank' rel='noopener noreferrer'> <FaPlay className='play'/> </a>
                        </div>
                    </div>
                       
                    </div>
                    </div>
                    <div className='col-6'>
                    <div className='banner__img'>
                        <img className='mahmut' src={state.image} alt='mahmut'/>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;
import React from 'react'


 const Navbar = () => {
    return (
       <div className='nvb'>
       <nav className='navbar'>
          <div className='container'>
         
          <ul className='navbar__left'>
                 <div className='navbar__left-logo'>
                
                     <img src='/images/mahmutlogo.jpg'alt='logo'/>
                 </div>
             </ul>
             <div className='navbar__container'>
             <ul className='navbar__right'>
                 <li><a href="">Home</a></li>
                 <li><a href="">About</a></li>
                 <li><a href="">Technologies</a></li>
                 <li><a href="">Project</a></li>
             </ul>
          </div>
         
          </div>
             

        
            
        </nav>
        </div>
    )
}

export default Navbar;
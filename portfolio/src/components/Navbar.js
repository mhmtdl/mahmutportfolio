
import React, {useState} from 'react'

const Navbar = () => {
   
     const [isNavCollapsed, setIsNavCollapsed] = useState(true);

     const handeleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
   
    return (
        <div className='nvb'>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
  <div className=" container container-fluid ">
    <a className="navbar-brand navbar__left-logo" href="/"> <img className='ms' src='/images/mahmutlogo.jpg'alt='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded= {isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handeleNavCollapse}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`${isNavCollapsed ? 'collapse': ''} navbar-collapse navbar__container`} id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-section">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#technologies-section">Technologies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#project-section">Projects</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar


import React from "react";
import Logotext from '././../../media/image/Atelier..png';



// Navbar css
import './navbar.css'

const Navbar = () => {
  return (
    <div className="header">
      <div className="max_w">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">

            
              <div className="logo">
              <img src={Logotext} alt="404" />
              </div>
            

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span><i className="fa-solid fa-bars"></i></span>
            </button>


            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >


              <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                

               <li><a href="#">Overview</a></li>
               <li><a href="#">Pages</a></li>
               <li><a href="#">Portfolio</a></li>
               <li><a href="#">Template</a></li>
               <li><a href="#">Contact</a></li>
               

                
               
              </ul>

                <div className="d-lex">

                    <button className="nav-btn">Buy Template</button>
                
                </div>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

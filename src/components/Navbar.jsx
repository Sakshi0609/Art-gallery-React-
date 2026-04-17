import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
            <div className="container">

                {/* Logo / Brand */}
                <a className="navbar-brand fw-bold fs-4 text-dark" href="#">
                    🎨 Art Gallery
                </a>

                {/* Mobile Toggle */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>

                       <li className="nav-item">
                           <Link className="nav-link" to="/artists">Artists</Link>
                       </li>


                        <li className="nav-item">
                          <Link className="nav-link" to="/contact">Contact</Link>
                      </li>

                    </ul>

                    
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
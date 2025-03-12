import React from 'react';
import logo from "./../../assets/logo.png"
import "./../NavSection/Nav.css"
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <div className="nav container">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="nav_list">
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/service"><li>Service</li></NavLink>
                    <NavLink to="/portfolio"><li>Portfolio</li></NavLink>
                </ul>
            </div>
            
            <i className="ri-menu-line"></i>

        </div>
        
        
        </>
    );
};

export default Nav;
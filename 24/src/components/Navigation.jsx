import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const navLinks = ["Home", "Battle", "Popular"]
    return (
        <ul className='nav'>
            {navLinks.map((navLink, index) => (
                <li key={index}><NavLink exact to={navLink === "Home" ? "/" : navLink.toLocaleLowerCase()}>{navLink}</NavLink></li>
            ))}
            {/* <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/battle">Battle</NavLink>
            </li>
            <li>
                <NavLink exact to= "/popular">Popular</NavLink>
            </li>
             */}
        </ul>
    );
};

export default Navigation;
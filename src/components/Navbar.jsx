import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
       <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <div className="navbar-brand">
                Guthub Search
            </div>
           <ul className='navbar-nav'>
               <li className="nav-item">
                   <NavLink className="nav-link" to="/" exact>Главная</NavLink>
               </li>
               <li className="nav-item">
                   <NavLink className="nav-link" to="/about">Информация</NavLink>
               </li>
           </ul>
       </nav>
    );
};

export default Navbar;
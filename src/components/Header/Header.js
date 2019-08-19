import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {

    const toogleMenu = () => {
        const menu = document.getElementById('menu');
        const backMenu = document.getElementById('back-menu');
        menu.classList.toggle('activate');
        backMenu.classList.toggle('back-menu-activate');
    }

    return (
        <header>
            <div className="logo">TitanLab</div>

            <div id="back-menu" onClick={toogleMenu}></div>

            <nav id='menu' className="nav-activate">

                <div className="logo">TitanLab</div>

                <ul>
                    <li><NavLink to="/team" onClick={toogleMenu} activeClassName="menu-active" >Team</NavLink></li>
                    <li><NavLink to="/services" onClick={toogleMenu} activeClassName="menu-active">Servicios</NavLink></li>
                </ul>
            </nav>

            <span className="btn-menu" onClick={toogleMenu}>
                <i className="fas fa-bars"></i>
            </span>
        </header>
    );
    

}

export default Header;

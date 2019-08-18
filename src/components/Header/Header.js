import React from 'react';
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
                    <li><a href="#!">Menú 1</a></li>
                    <li><a href="#!">Menú 2</a></li>
                    <li><a href="#!">Menú 3</a></li>
                    <li><a href="#!">Menú 4</a></li>
                    <li><a href="#!">Menú 5</a></li>
                </ul>
            </nav>

            <span className="btn-menu" onClick={toogleMenu}>
                <i className="fas fa-bars"></i>
            </span>
        </header>
    );
    

}

export default Header;

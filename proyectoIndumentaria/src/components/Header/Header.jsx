import React from 'react'
import './header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div>
                    <span className="logo">
                        <img src="../src/assets/logo.jpg" className="logo-imagen"></img>
                    </span>
                </div>
                <div>
                    <nav>
                        <ul className="navbar">
                            <li className="navbar-item">
                                <a href="#Inicio">Inicio</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#Productos">Productos</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#Contacto">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header
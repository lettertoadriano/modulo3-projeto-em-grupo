import React, {useState} from 'react'

import './Navbar.css'

const Navbar = () => {
    return (

        <header>
            <div className='wrapper'>
                <div className='logo'><img src="https://i.postimg.cc/3wVHDPnf/C-pia-de-favicon-ico-700-400-px.png"></img></div>
                <ul className='nav-area'>
                    <li><a>Início</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Bebidas</a></li>
                    <li><a>Bebidas Quentes</a></li>
                    <li><a>Petiscos</a></li>
                    <li><a>Contatos</a></li>
                    <button className='button'>Login/Cadastro</button>
                </ul>  
            </div>

            <div className='welcome-text'>
                <h1>
                    PUB RIO
                </h1>
                <a>Venha conhecer!</a>
            </div>
        </header>

    )
}

export default Navbar
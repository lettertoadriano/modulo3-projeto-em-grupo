import React, {useState} from 'react'



import './Footer.css'

const Footer = () => {
    return (

        <footer className='footer'>
            <div className='container-footer'>
                <div className='row-footer'>
                    <div className='footer-col'>
                        <h4>Informações</h4>
                        <ul>
                            <li><a href="#"></a>Sobre</li>
                            <li><a href="#"></a>Bebidas</li>
                            <li><a href="#"></a>Petiscos</li>
                            <li><a href="#"></a>Contatos</li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Informações</h4>
                        <ul>
                            <li><a></a>Sobre</li>
                            <li><a></a>Bebidas</li>
                            <li><a></a>Petiscos</li>
                            <li><a></a>Contatos</li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Informações</h4>
                        <ul>
                            <li><a></a>Sobre</li>
                            <li><a></a>Bebidas</li>
                            <li><a></a>Petiscos</li>
                            <li><a></a>Contatos</li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Newsletter e Cupons</h4>
                        <input type="email" placeholder='Digite seu email...' className='email'></input>
                        <button className='botaofinal'>Registrar email</button>
                    </div>
                </div>
            </div>
        </footer>



    )
}



export default Footer
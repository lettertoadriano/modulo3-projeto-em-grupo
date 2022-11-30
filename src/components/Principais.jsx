import React, {useState} from 'react'

import './Principais.css'

const Principais = () => {
    return (

        <section className='features'>
            <h1 className='heading'>MAIS PEDIDOS...</h1>
            <p>As bebidas mais pedidas em nosso PUB on-line</p>

            <div className='box-container'>
                <div className='box'>
                    <img></img>
                    <h3></h3>
                    <p></p>
                    <a href="#">Compre agora!</a>
                </div>
                <div className='box'>
                    <img></img>
                    <h3></h3>
                    <p></p>
                    <a href="#">Compre agora!</a>
                </div>
                <div className='box'>
                    <img></img>
                    <h3></h3>
                    <p></p>
                    <a href="#">Compre agora!</a>
                </div>
                <div className='box'>
                    <img></img>
                    <h3></h3>
                    <p></p>
                    <a href="#">Compre agora!</a>
                </div>
            </div>
        </section>

    )
}

export default Principais
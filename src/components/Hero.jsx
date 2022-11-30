import React from 'react'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>A BEBIDA CERTA PARA VOCÊ</h1>
                <p className='search-text'> Procure aquela bebida para alegrar o seu dia. </p>
                <form className='search'>
                    <div>
                        <input type='text' placeholder='Bebida...' />
                    </div>
                    <div className='radio'>
                        <button type='submit'>Procure!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
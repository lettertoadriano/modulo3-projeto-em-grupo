import React, {useState} from 'react'

import './Procurar.css'

const Procurar = () => {
    return (

        <section className='procurando'>
            <div className='letras'>
                <h3>Está procurando algo?</h3>
                <p>Encontre agora aquela bebida gostosa!</p>
                <div className='boxi'>
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>     
                </div>
            </div>
        </section>

    )
}

export default Procurar
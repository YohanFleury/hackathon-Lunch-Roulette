import React, { useState } from 'react'
import MyButton from '../components/MyButton'

const Croissantage = () => {
    const options = ["Croissants", "Bouteilles", "Fruits"]
    const [optionSelected, setOptionSelected] = useState("")
    
    return (
        <div>
            <h1>Croissantage</h1>
            <MyButton name="Let's go !" onClick={() => setOptionSelected(options[Math.floor(Math.random()*options.length)])} />
            {optionSelected && <p> {optionSelected}</p>}
        </div>
    )
}

export default Croissantage

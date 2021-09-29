import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import roue from '../assets/roue.png'
import pacifico from '../assets/Pacifico.ttf'
import '../roulette/roulette.css'
import croissants from '../assets/croissantage.png'
import apero from '../assets/APERO.png'

const Croissantage = () => {
    const options = ["Viennoiseries", "Bouteilles", "Fruits"]
    const [optionSelected, setOptionSelected] = useState("")
    const [rouletteTourne, setRouletteTourne] = useState(false)

    const handleClick = () => {
        setRouletteTourne(!rouletteTourne)
        setTimeout(() => {
            setOptionSelected(options[Math.floor(Math.random()*options.length)])
        }, 1500);
    }
    return (
        <div>
            <h1>Croissantage</h1>
            <div style={{display: 'flex', width:"100%", justifyContent:'center'}}> <button className="white_button" style={{backgroundColor: "#FF5E92", color: "white", borderColor: "white", }}>Vas-y fais tourner !</button> </div>
            <div className="croissantage-container">
                {optionSelected && 
                <div className="result-croissantage">               
                <div className="tada">
                    <p>Tadaaaaaaa !</p>
                    <p>Aujourd'hui c'est ...</p>
                    <p>{optionSelected}</p>
                </div>
                <div>
                <p> {optionSelected === "Viennoiseries" ? <img src={croissants} /> : optionSelected === "Bouteilles" ? <img src={apero} /> : "fruits" }</p>
                </div>
                </div>
                }
                <div class="roulette-container">
                <img onClick={handleClick} id="roulette" className={rouletteTourne ? "roulette element-animation" : "roulette"} src={roue} alt="roulette" />
                </div>
                
            </div>
            
        </div>
    )
}

export default Croissantage

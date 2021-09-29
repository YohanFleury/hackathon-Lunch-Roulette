import React, { useState } from 'react'

import './roulette.css'
import parapluie from '../assets/parapluie.png'
import past from '../assets/past.png'
import lapin from '../assets/lapin.png'
import roue from '../assets/roue.png'
import { restos }from '../fakeDatas/resto'


const RouletteLunch = () => {

    const [rouletteTourne, setRouletteTourne] = useState(false)
    const [restoSelected, setRestoSelected] = useState()

    const handleClick = () => {
        setRouletteTourne(!rouletteTourne)
        const result = restos.filter(e => e.fields.code === "75010")
        setTimeout(() => {
            setRestoSelected(result[Math.floor(Math.random()*result.length)])
        }, 1500);
    }

    return (
        <div>
            <h1>Lunch roulette</h1>
            <div className="buttons_div">
                <div className="blue_button" type="submit">1. Choisis tes filtres</div>
                <div className="white_button_div">
                    <button className="white_button"><p>Ah, mince, il pleut! </p><img src={parapluie} alt="" /> </button>
                    <button className="white_button">Y'a Coline... sans glutten</button>
                    <button className="white_button big_button"><p>Végétarien... </p><img src={past} alt="" /><p>(pas steack)</p></button>
                    <button className="white_button"><p>Vegan </p><img src={lapin} alt="" />  </button>
                </div>
                <div className="blue_button" type="submit">2. Vas-y fais tourner ! (Clique sur la roue)</div>
            </div>
            <div class="second_container">
            <img onClick={handleClick} id="roulette" className={rouletteTourne ? "roulette element-animation" : "roulette"} src={roue} alt="roulette" />
            
            {restoSelected && 
                <div>
                    <h2>Tadaaaaaaa !</h2>
                    <h3>aujourd'hui c'est ...</h3>
                    <p> {restoSelected.fields.nom_restaurant}</p>
                    <p> {restoSelected.fields.adresse}</p>
                    <p> {restoSelected.fields.code}</p>
                </div>
            }
            </div>
        </div>
    )
}

export default RouletteLunch

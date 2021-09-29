import React, { useState } from 'react'
import MyButton from '../components/MyButton'
import { restos } from '../fakeDatas/resto'

const Lunch = () => {

    const [postCode, setPostCode] = useState("")
    const [restoSelected, setRestoSelected] = useState()

    const handleSubmit = () => {
        const result = restos.filter(e => e.fields.code === postCode)
        setRestoSelected(result[Math.floor(Math.random()*result.length)])
    }

    return (
    <>
        <div>
            <label> Indique nous ton code postal </label>
            <input onChange={e => setPostCode(e.target.value)} />
            <label> Choisis la catégorie : </label>
            <select name="pets" id="pet-select">
                <option value=""></option>
                <option value="Fast-food">Fast-food</option>
                <option value="Pizza">Pizza</option>
                <option value="Végé">Végétarien</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Asiatique">Asiatique</option>
                <option value="Italien">Italien</option>
            </select>
            <MyButton name="valider" onClick={handleSubmit} />
        </div>
        {restoSelected && 
        <>
            <h2>
                Nous avons sélectionné le resto suivant : 
                <p>{restoSelected.fields.nom_restaurant}</p>
                <p> {restoSelected.fields.adresse}</p>
                <p> {restoSelected.fields.code}</p>
            </h2>
        </>
        }

    </>
    )
}

export default Lunch

import React from 'react'
import MyButton from '../components/MyButton';
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Link to="/lunch">
                <MyButton name="Lunch" path="/lunch" />
            </Link>
            <Link to="/apero">
                <MyButton name="Apéro" path="/apero" />
            </Link>
            <Link to="/croissantage">
                <MyButton name="Croissantage" path="/croissantage" />
            </Link>
        </div>
    )
}

export default Home

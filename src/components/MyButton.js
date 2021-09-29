import React from 'react'


const MyButton = ({ name, onClick }) => {

    return (
            <button onClick={onClick}>
                {name}
            </button>
        
    )
}

export default MyButton

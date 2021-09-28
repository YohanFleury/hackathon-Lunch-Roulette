import React from 'react'

const MyButton = ({ name }) => {
    return (
        <div style={{ backgroundColor: 'yellow', borderRadius: '15px', width:'100px', marginBottom: '20px'}}>
            {name}
        </div>
    )
}

export default MyButton

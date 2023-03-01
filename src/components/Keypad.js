// Code Keypad Component Here
import React from 'react'


function Keypad (){
    const enteringPass = (e) => {
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" onchange={enteringPass} />
        </div>
    )
}

export default Keypad;
// Code EyesOnMe Component Here
import React from 'react'

const focus = (e) => {
    console.log('Good!')
}

const blus = (e) => {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe() {
  return (
    <button onFocus={focus} onBlur={blur}>Eyes On Me</button>
  )
}

export default EyesOnMe
import React from 'react'

const Boton = ({functionH,icon}) => {
  return (
    <button onClick={functionH}><h2>{icon}</h2></button>
  )
}

export default Boton
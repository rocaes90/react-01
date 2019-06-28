import React, { useState } from 'react'

function ExampleUseState() {
  //Declaración de una variable de estado 
  const [contador, setContador] = useState(0)

  return (
    <div>
      <h5>useState</h5>
      <p>Me ha presionado {contador} veces</p>
      <button onClick={()=> setContador(contador + 1) }>
        Presióname
      </button>
      <button onClick={()=> setContador(0) }>
        Reiniciar
      </button>
    </div>
  )
}

export default ExampleUseState

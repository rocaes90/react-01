import React, { useEffect, useState } from 'react'

function ExampleUseEffect() {
  const [isValid, setIsValid] = useState(false)

  //Implementación del hook useEffect
  useEffect(() => {
    setIsValid(true)
  }, [])

  return (
    <div>
      <h5>useEffect</h5>
      <p>Validated component: {isValid ? 'True' : 'False'}</p>
    </div>
  )
}

export default ExampleUseEffect


import Button from './Button'
import './main.css'
import React, { useState } from 'react'

function App() {
  const [total,setTotal] = useState(0)

  //é uma função que não retorna nada, void
  function incrementar() {
    setTotal(total + 1)
  }

  return (
    <div>
      <p>{total}</p>
      <Button onClick={incrementar} tamanho='40px'>Incrementar 2</Button>
      
    </div>
  )
}

export default App

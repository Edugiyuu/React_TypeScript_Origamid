
import './main.css'
import Input from "./Input";
import React, { useState } from 'react'

function App() {
  const [data, setData] = useState('')
  return (
    <div>
      <p>Início da viajem {data}</p>
      <Input id='email' type='email' label="Email"></Input>
      <Input id='nome' type='text'  label="Nome"></Input>
      <Input id='inicio' type='date' value={data} onChange={(event)=>setData(event.currentTarget.value)}label="Inicio da Viagem"></Input>
      <Input id='horario' type='time' label="Horário"></Input>
    </div>
  )
}

export default App

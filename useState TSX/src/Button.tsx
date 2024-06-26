import React, { Dispatch } from 'react'

interface ButtonProps{
    incrementar: Dispatch<React.SetStateAction<number> >
}

const Button = ({incrementar}:ButtonProps) => {
  return (
    <button onClick={() => incrementar(n => n + 1)}>Incrementar</button>
  )
}

export default Button
import React, { ReactNode } from 'react'

interface ButtonProps {
    //children pode ser varias coisas diferentes uma string pode ser outro elemento react ele pode ser varias coisas
    //O reactNode é um tipo de typescript (???)
    tamanho?:string
    children: ReactNode
    //definindo onClick para que o Button tenha a propriedade onClick
    onClick?: ()=> void
}

const Button = (props:ButtonProps) => {
  return (
    <button onClick={props.onClick}style={{fontSize: props.tamanho}}>{props.children}</button>
  )
}

export default Button
import React, { ComponentProps } from 'react'

type InputProps = ComponentProps<'input'> & {
    label: string;
    id: string
}

const Input = ({label,id,...props}: InputProps) => {
  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input id={label} name={label} type="text" {...props}></input>
        {/* Esse "...props" é para passar o restante das propriedades do tipo input sem ter q passar de um em um */}
    </div>
  )
}

export default Input
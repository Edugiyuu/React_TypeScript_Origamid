import React, { useContext } from 'react'
import { UiContext } from './UiContext'

const Header = () => {
    const contexto = useContext(UiContext)
  return (
    <h1>
        Header: {contexto?.dark ? 'dark' : 'light'}
        <button onClick={() => contexto?.setDark((boolean)=>!boolean)}>mode</button>
    </h1>
  )
}

export default Header
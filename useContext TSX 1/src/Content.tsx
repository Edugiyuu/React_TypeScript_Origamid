import React, { useContext } from 'react'
import { UiContext } from './UiContext'

const Content = () => {
    const contexto = useContext(UiContext)
    
  return (
    <h1>{contexto?.dark ? 'dark' : 'light'}</h1>
  )
}

export default Content
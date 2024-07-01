import { useState } from 'react'
import './Style.css'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'
import Resumo from '../Pages/Resumo'

function App() {


  return (
    <div>
      <Sidenav></Sidenav>
      <main>
        <Header></Header>
       <Resumo></Resumo>
      </main>
      
    </div>
  )
}

export default App

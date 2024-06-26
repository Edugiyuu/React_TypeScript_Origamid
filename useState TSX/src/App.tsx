
import React, { useEffect, useState } from 'react';
import Button from './Button';

function user() {
  return{
    nome:'Edu',
    profissao:'Dev'

  }
}

interface User{
  nome: string
  profissao:string
}
function App() {
  const [data,setData] = useState<null | User>(null)
  const [total, setTotal] = useState(0)

  useEffect(() =>{
    setTimeout(()=>{
      setData(user())
    },1000)
  },[])

  return <div>
      <div>
        <p>total: {total}</p>
        <Button incrementar={setTotal}/>
      </div>
    {data !== null && <div>{data.nome}
      
      </div>}</div>
}

export default App;

import React from 'react';
import useFetch from './useFetch';

type Produto = {
    id: string
    nome: string
    preco: number
    quantidade:number
    descricao: string
    internacional:boolean
}

function App() {
  const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos/")
  //aqui ele iria pegar só UM produto já que ele não é um array
  /* const produtos = useFetch<Produto>("https://data.origamid.dev/produtos/") */
  return (
    <div>
   
    </div>
  );
}

export default App;

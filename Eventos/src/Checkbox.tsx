import React, { ChangeEventHandler, useState } from "react";
//aqui ele tá pegando a label lá no App.tsx e que é do tipo string
const Checkbox = ({label}: {label:string}) =>{
    //se tiver true ele fica marcado se tiver false ele não fica marcado
    const [value, setValue] = useState(false)

    //f unção chamada quando o estado do checkbox muda
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>{
        // event.currentTarget.checked verifica se o checkbox está marcado true ou desmarcado false
        //se o input checkbox mudou ele verifica se a caixa está marcada ou não se estiver marcada ele muda o value para true
        setValue(event.currentTarget.checked)
    }

    return(
        <label
        style={{
            padding:'1rem',
            //ternario aonde se for true é verde e se for false é vermelho
            border:value ?'2px solid green':'2px solid red'
        }}
        >
            <input type="checkbox" checked={value} onChange={handleChange}/>
            {label}
        </label>
    )
}

export default Checkbox
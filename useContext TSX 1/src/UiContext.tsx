import React, { Dispatch, PropsWithChildren, createContext, useState } from "react";

type InterfaceUiContext = {
    dark:boolean,
    setDark: Dispatch<React.SetStateAction<boolean>>
}

export const UiContext = createContext<InterfaceUiContext | null>(null)

//lembrando que o children do PropsWithChildren é o valor que vai ter no UiContextProvider quando vc for usa-la
 export const UiContextProvider = ({children}: PropsWithChildren) =>{
    const [dark,setDark] = useState(false)

    //assim ele cria o contexto ele já sabe os valores novos que no caso é "novo valor"
    return <UiContext.Provider value={{dark,setDark}}>{children}</UiContext.Provider>
}
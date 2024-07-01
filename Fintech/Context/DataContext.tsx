import React, { PropsWithChildren, createContext } from "react";

const DataContext = createContext(null)

export const DataContextProvider = ({children}: PropsWithChildren) =>{
    return <DataContext.Provider value={null}>{children}</DataContext.Provider>
}
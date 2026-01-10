import { createContext, useContext, useState } from "react"

export const RegisterTableContext = createContext(null)

export const RegisterTableProvider = ({ children }) => {


    return (
        <RegisterTableContext.Provider value={''}>{children}</RegisterTableContext.Provider>
    )
}

export const useRegisterTable = () => {
    const contextValue = useContext(RegisterTableContext)
    return contextValue;
}
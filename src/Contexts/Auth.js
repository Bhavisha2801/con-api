import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()




export const AuthContextProvider = ({children}) => {

    const isAuth = getValue("isLogin") ? true : false

    

    const [flag,setFlag] = useState(true)

    function getValue(key){
        let token = localStorage.getItem(key)
        return token 
    }

    return (
        <AuthContext.Provider value={{isAuth , flag , setFlag}}>
            {children}
        </AuthContext.Provider>
    )
}
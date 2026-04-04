import React from 'react'
import { createContext } from 'react'
export const UserDataContext=createContext()
const UserContext = ({children}) => {
    let value={}
  return (
    <div>
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
      
    </div>
  )
}

export default UserContext

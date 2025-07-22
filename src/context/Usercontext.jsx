import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';


export const UserDataContext = createContext();

function Usercontext({children}) {
  const [user, setUser] = useState({
    fullName: {
      FirstName: '',
      LastName: ''
    },
    
   
  })
  return (
    <div>
      <UserDataContext.Provider value={user}>
      {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default Usercontext
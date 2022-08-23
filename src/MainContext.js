import {  createContext, useState } from "react";

export const MainStateContext = createContext()

const MainContext =({children})=>{

    const [loggedInUser, setLoggedInUser] = useState({})

    console.log(loggedInUser)

return(<MainStateContext.Provider value={{user:loggedInUser,setUser:setLoggedInUser}}>
    {children}
</MainStateContext.Provider>)
}

export default MainContext;
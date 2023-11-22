import { useState } from "react";
import AppContext from "./AppContext";
const AppContextProvider=({children})=>{
    const [animateSearchButton, setAnimateSearchButton]=useState(false)
    const value={
        animateSearchButton, 
        setAnimateSearchButton
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export default AppContextProvider
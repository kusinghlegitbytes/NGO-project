import { createContext } from "react";
const AppContext=createContext({
    animateSearchButton:false, 
    setAnimateSearchButton:()=>{}
})
export default AppContext
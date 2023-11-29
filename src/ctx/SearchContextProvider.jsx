import { useState } from "react";
import SearchContext from "./SearchContext";
const SearchContextProvider=({children})=>{
    const [searchQuery, setSearchQuery]=useState("")
    const value={
        searchQuery, 
        setSearchQuery
    }
    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
}
export default SearchContextProvider
import { useState } from "react";
import SearchContext from "./SearchContext";
const SearchContextProvider=({children})=>{
    const [searchQuery, setSearchQuery]=useState("")
    const [showSuggestions, setShowSuggestions]=useState(false)
    const [showRecent, setShowRecent]=useState(false)
    const value={
        searchQuery, 
        setSearchQuery,
        showRecent, 
        setShowRecent,
        showSuggestions,
        setShowSuggestions
    }
    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
}
export default SearchContextProvider
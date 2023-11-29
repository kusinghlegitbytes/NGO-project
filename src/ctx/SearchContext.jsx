import { createContext } from "react";
const SearchContext=createContext({
    searchQuery:'',
    setSearchQuery:()=>{},
    showSuggestions:false,
    setShowSuggestions:()=>{},
    showRecent:false,
    setShowRecent:()=>{}
})
export default SearchContext
import RangeSlider from "../range-slider/RangeSlider";
import SearchCard from "./SearchCard";
import { useState } from "react";
import useCurrentURL from "../../hooks/useCurrentURL";
import { useContext } from "react";
import SearchContext from "../../ctx/SearchContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [showRangeSlider, setShowRangeSlider]=useState(false)
  const {searchQuery, setSearchQuery, showRecent, setShowRecent, showSuggestions, setShowSuggestions}=useContext(SearchContext)
  const currentURL=useCurrentURL()
  const {ngos}=useSelector(state=>state)
  const ngoSuggestions=ngos.filter(ngo=>ngo.name.toLowerCase().startsWith(searchQuery.toLowerCase()))
  const navigate=useNavigate()
  const handleShowRangeSlider=()=>{
    setShowRangeSlider(prevState=>!prevState)
  }
  const handleShowRecent=e=>{
    setSearchQuery("")
    setShowRecent(true)   
    setShowSuggestions(false) 
  }
  const handleShowSuggestions=(e)=>{
    setSearchQuery(e.target.value)
    if(e.target.value===""){
      setShowRecent(true)
    }
    setShowSuggestions(true)    
    setShowRecent(false)
  }
  const handleSearchClick=()=>{
    setShowSuggestions(false)
    setShowRecent(false)
    navigate("/search-results")
  }
    return (
      <div className={`w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto relative ${currentURL==="/search-results"?"animate-search":""}`}>
        <div className="flex flex-row">
          <input
            type='search'
            className='w-full p-2 mb-4 rounded-bl-md rounded-tl-md bg-white h-11 custom-shadow'
            placeholder='Search Here...'
            onClick={(e)=>handleShowRecent(e)}
            onChange={(e)=>handleShowSuggestions(e)}
          />
          <button className="h-11 p-2 bg-red-600 text-white  rounded-br-md rounded-tr-md" onClick={handleSearchClick}>Search</button>
        </div>
        <div className="absolute top-1 right-12 pr-3">
          <img src="/assets/imgs/filter_icon.png" className="w-4/5" onClick={handleShowRangeSlider}/>
        </div>
          {showRangeSlider && <RangeSlider/>}
          {showRecent && searchQuery.length<1 && <SearchCard ngoSuggestions={ngoSuggestions}/>}
          {showSuggestions && searchQuery.length>=1 && <SearchCard ngoSuggestions={ngoSuggestions}/>}
      </div>
    );
  };
  
  export default Search;
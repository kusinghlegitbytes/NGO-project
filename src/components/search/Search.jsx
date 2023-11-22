import RangeSlider from "../range-slider/RangeSlider";
import SearchCard from "./SearchCard";
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import AppContext from "../../ctx/AppContext";
const Search = () => {
  const [showRangeSlider, setShowRangeSlider]=useState(false)
  const [showSuggestions, setShowSuggestions]=useState(false)
  const [showRecent, setShowRecent]=useState(false)
  const [query, setQuery]=useState('')
  const { animateSearchButton, setAnimateSearchButton} = useContext(AppContext)
  const handleShowRangeSlider=()=>{
    setShowRangeSlider(prevState=>!prevState)
  }
  const handleShowRecent=e=>{
    setShowRecent(true)   
    setShowSuggestions(false) 
  }
  const handleShowSuggestions=(e)=>{
    setQuery(e.target.value)
    if(e.target.value===""){
      setShowRecent(true)
    }
    setShowSuggestions(true)    
    setShowRecent(false)
  }
  const handleSearchClick=()=>{
    setAnimateSearchButton(prevState=>!prevState)
  }
    return (
      <div className={`w-1/3 mx-auto relative ${animateSearchButton?"animate-search":""}`}>
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
          {showRecent && query.length<1 && <SearchCard text="Recent Searches"/>}
          {showSuggestions && query.length>=1 && <SearchCard text="Suggestions"/>}
      </div>
    );
  };
  
  export default Search;
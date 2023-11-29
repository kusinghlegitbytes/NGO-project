import { useContext } from "react";
import { BsClock } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import "./search.css"
import { useNavigate } from "react-router-dom";
import SearchContext from "../../ctx/SearchContext";
const SearchCard = ({ngoSuggestions}) => {
    const navigate=useNavigate()
    const {setShowRecent, setShowSuggestions, setSearchQuery}=useContext(SearchContext)
    const handleNavigate=(searchQuery)=>{
        setShowSuggestions(false)
        setShowRecent(false)
        setSearchQuery(searchQuery)
        navigate("/search-results")
    }
    const handleClose=()=>{
        window.alert("removed")        
    }
  return <div className='custom-shadow rounded-lg p-3 mt-2 search-card'>
    {ngoSuggestions.map(ngo=><div key={ngo.id} className='flex flex-row gap-4 justify-between items-center pt-1'><div onClick={()=>handleNavigate(ngo.name)} className="flex flex-row items-center gap-1 hover:cursor-pointer"><BsClock/><span className="text-orange-600">{ngo.name}</span></div><IoClose className=" hover:cursor-pointer" onClick={handleClose}/></div>)}
  </div>
}
export default SearchCard

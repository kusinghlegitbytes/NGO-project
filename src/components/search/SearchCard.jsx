import { BsClock } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import "./search.css"
import { useNavigate } from "react-router-dom";
const SearchCard = ({text}) => {
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate("/search-results")
    }
    const handleClose=()=>{
        window.alert("removed")        
    }
  return <div className='custom-shadow rounded-lg p-3 mt-2 search-card'>
    <div className='flex flex-row gap-4 justify-between items-center pt-1'><div onClick={handleNavigate} className="flex flex-row items-center gap-1 hover:cursor-pointer"><BsClock/><span className="text-orange-600">{text}</span></div><IoClose className=" hover:cursor-pointer" onClick={handleClose}/></div>
    <div className='flex flex-row gap-4 justify-between items-center pt-1'><div onClick={handleNavigate} className="flex flex-row items-center gap-1 hover:cursor-pointer"><BsClock/><span className="text-orange-600">{text}</span></div><IoClose className=" hover:cursor-pointer" onClick={handleClose}/></div>
    <div className='flex flex-row gap-4 justify-between items-center pt-1'><div onClick={handleNavigate} className="flex flex-row items-center gap-1 hover:cursor-pointer"><BsClock/><span className="text-orange-600">{text}</span></div><IoClose className=" hover:cursor-pointer" onClick={handleClose}/></div>
    <div className='flex flex-row gap-4 justify-between items-center pt-1'><div onClick={handleNavigate} className="flex flex-row items-center gap-1 hover:cursor-pointer"><BsClock/><span className="text-orange-600">{text}</span></div><IoClose className=" hover:cursor-pointer" onClick={handleClose}/></div>
    <div className='flex flex-row gap-4 justify-between items-center pt-1'><div onClick={handleNavigate} className="flex flex-row items-center gap-1 hover:cursor-pointer"><BsClock/><span className="text-orange-600">{text}</span></div><IoClose className=" hover:cursor-pointer" onClick={handleClose}/></div>
  </div>
}

export default SearchCard

import "./search-results.css"
import Search from "../../components/search/Search"
import Card from "./Card"
import Logo from "../../components/logo/Logo"
import Tags from "./Tags"
import AppContext from "../../ctx/AppContext"
import { useContext, useEffect } from "react"
import { useSelector } from "react-redux"
import SearchContext from "../../ctx/SearchContext"
import { useDispatch } from "react-redux"
import {fetchNGOsAsync} from "../../store/apis/ngoAPIs"
const SearchResults = () => {
  const {setAnimateSearchButton}=useContext(AppContext)
  const {searchQuery}=useContext(SearchContext)
  const {ngos}=useSelector(state=>state)
  const dispatch=useDispatch()
  useEffect(()=>{
    setAnimateSearchButton(false)
    dispatch(fetchNGOsAsync())
  },[])
  const filteredNGOs=ngos.filter(ngo=>ngo.name.toLowerCase()===searchQuery.toLowerCase())
  console.log(filteredNGOs.length, "==========")
  return <div className='bg-neutral-100 pt-10'>
    <Logo/>
    <Search/>
    <main className="results-main">
      <div style={{marginTop:"-40px"}}>
        <Tags/>
      </div>
      <div className="w-7/12 mx-auto grid grid-cols-1 sm:grid-cols-2 mt-10 justify-around gap-3 pb-10">
        {filteredNGOs[0] ? filteredNGOs.map(ngo=><Card ngo={ngo}/>):<div className="text-center text-red-500 mx-auto w-1/2">Nothing to show</div>}
      </div>
    </main>
  </div>
}

export default SearchResults

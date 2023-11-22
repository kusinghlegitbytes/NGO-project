import "./search-results.css"
import Search from "../../components/search/Search"
import Card from "../../components/card/Card"
import Logo from "../../components/logo/Logo"
import Tags from "../home/Tags"
import AppContext from "../../ctx/AppContext"
import { useContext, useEffect } from "react"
const SearchResults = () => {
  const {setAnimateSearchButton}=useContext(AppContext)
  useEffect(()=>{
    setAnimateSearchButton(false)
  },[])
  return <div className='bg-neutral-100 pt-10'>
    <Logo/>
    <Search/>
    <main className="results-main p-10">
      <Tags/>
      <div className="grid grid-cols-2 gap-7 w-5/6 mx-auto">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  </div>
}

export default SearchResults

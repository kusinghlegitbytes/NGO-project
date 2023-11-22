import "./search-results.css"
import Search from "../../components/search/Search"
import Card from "../../components/card/Card"
const SearchResults = () => {
  return <div className='bg-neutral-100 pt-10'>
    <Search/>
    <main className="results-main p-10">
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

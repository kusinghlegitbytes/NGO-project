import { Fragment, useState } from 'react'
import RangeSlider from '../components/RangeSlider'
const Search = () => {
  const [showFilter, setShowFilter]=useState(false)
  const handleShowFilter=()=>{
    console.log("clicked")
    setShowFilter(prevState=>!prevState)
  }
  return <Fragment>
    <div className='search-box-container'>
      <input 
        type='search' 
        className='search-box' 
        placeholder='Search Here...'
      />
      <div className='search-filter-icon'><img src="/assets/imgs/mi_filter.png" onClick={handleShowFilter}/></div>
      {showFilter && <RangeSlider/>}
    </div>
  </Fragment>
}

export default Search

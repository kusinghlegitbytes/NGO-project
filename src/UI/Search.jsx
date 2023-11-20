import { Fragment, useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const Search = () => {
  const [showFilter, setShowFilter]=useState(false)
  const handleShowFilter=()=>{
    console.log("clicked")
    setShowFilter(prevState=>!prevState)
  }
  return <Fragment>
    <div className='search-box-container'>
      <input type='search' className='search-box' style={showFilter?{height:"100px"}:{}} placeholder='Search Here...'/>
      <div className='search-filter-icon'><img src="/assets/imgs/mi_filter.png" onClick={handleShowFilter}/></div>
      {showFilter && <div className='search-slider-container'>
        <Box sx={{ width: 300 }}>
          <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: '#656565' }}
          />
        </Box>
      </div>}
    </div>
  </Fragment>
}

export default Search

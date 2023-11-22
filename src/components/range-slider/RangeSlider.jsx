import { useState } from 'react'
const RangeSlider = () => {
    const [data, setData]=useState(0)
    console.log(data, "=======")
  return (
    <div className='mt-0 w-full p-2 rounded-md bg-white custom-shadow search-slider-container'>
      <label className='text-red-500 font-bold'>{`Up to ${data} km`}</label>
      <input type='range' className='accent-gray-500 w-full' min={0} max={50} step={1} value={data} onChange={(e)=>setData(e.target.value)}/>
    </div>
  )
}

export default RangeSlider

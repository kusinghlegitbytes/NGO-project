import "./tags.css"
import Tag from "./Tag"
import { useContext } from "react"
import AppContext from "../../ctx/AppContext"
const Tags = () => {
    const {animateSearchButton}=useContext(AppContext)
  return (
    <div className='w-1/2 mx-auto mt-1'>
      {!animateSearchButton && <>
        <div className='flex flex-row justify-center gap-2 p-1'>
            <Tag/>
            <Tag/>
            <Tag/>
        </div>
        <div className='flex flex-row gap-2 justify-center p-1'>
            <Tag/>
            <Tag/>
        </div>
      </>}
      {animateSearchButton && <div>
        <div className='flex flex-row justify-center gap-2 p-1'>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
        </div>
        </div>}
    </div>
  )
}
export default Tags

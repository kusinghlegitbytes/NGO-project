import "./tags.css"
import Tag from "./Tag"
import useCurrentURL from "../../hooks/useCurrentURL"
const Tags = () => {
  const currentURL=useCurrentURL()
  return (
    <div className='w-1/2 mx-auto mt-1'>
      {currentURL==="/" && <>
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
      {currentURL==="/search-results" && <div>
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

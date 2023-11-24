import "./tags.css"
import Tag from "./Tag"
const Tags = () => {
  return (
    <div className='w-2/3 mx-auto mt-1'>
        <div className='flex flex-row justify-center gap-2 p-1'>
            <Tag/>
            <Tag/>
            <Tag/>
        </div>
        <div className='flex flex-row gap-2 justify-center p-1'>
            <Tag/>
            <Tag/>
        </div>
    </div>
  )
}
export default Tags

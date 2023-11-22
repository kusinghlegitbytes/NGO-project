import "./tags.css"
import Tag from "./Tag"
const Tags = () => {
  return (
    <div className='w-1/3 mx-auto mt-3'>
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

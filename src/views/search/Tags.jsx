import "../home/tags.css"
import Tag from "./Tag"
const Tags = () => {
  return (
    <div className='w-2/4 mx-auto mt-1'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-3 p-1'>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
        </div>
    </div>
  )
}
export default Tags

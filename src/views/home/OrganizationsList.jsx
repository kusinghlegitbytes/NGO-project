import Card from "../../components/card/Card"
const OrganizationsList = () => {
  return (
    <div className='w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-3 pb-10'>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default OrganizationsList

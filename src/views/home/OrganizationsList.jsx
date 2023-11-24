import Card from "../../components/card/Card"
const OrganizationsList = () => {
  return (
    <div className='w-9/12 mx-auto grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mt-10 justify-around gap-3 pb-10'>
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

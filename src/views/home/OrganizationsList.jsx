import Card from "../../components/card/Card"
const OrganizationsList = ({ngos}) => {
  const slicedNGOs=ngos.slice(0,4)
  return (
    <div className='w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-3 pb-10'>
      {slicedNGOs.map(ngo=><div key={ngo.id}><Card ngo={ngo}/></div>)}
    </div>
  )
}

export default OrganizationsList

import "./home.css"
import Search from '../../components/search/Search'
import Logo from "../../components/logo/Logo"
import Tags from "./Tags"
import OrganizationsList from "./OrganizationsList"
import { useDispatch, useSelector } from "react-redux"
import {fetchNGOsAsync} from "../../store/apis/ngoAPIs"
import { useEffect } from "react"
const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchNGOsAsync())
  },[])
  const {ngos, error, totalRecords}=useSelector(state=>state)
  return <div className='bg-neutral-100'>
    <Logo/>
    <Search/>
    <div className='home'>
    <Tags/>
    <div className="text-center text-black-100 font-bold text-xl mt-8">
        Near By/Famous/Mostly Search
    </div>
        {ngos[0] && <OrganizationsList ngos={ngos}/>}
    </div>
  </div>
}

export default Home

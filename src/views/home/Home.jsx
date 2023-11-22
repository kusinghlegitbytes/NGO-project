import "./home.css"
import Search from '../../components/search/Search'
import Logo from "../../components/logo/Logo"
import Tags from "./Tags"
import OrganizationsList from "./OrganizationsList"
const Home = () => {
  return <div className='bg-neutral-100'>
    <Logo/>
    <Search/>
    <div className='home'>
    <Tags/>
    <div className="text-center text-black-100 font-bold text-xl mt-8">
        Near By/Famous/Mostly Search
    </div>
        <OrganizationsList/>
    </div>
  </div>
}

export default Home

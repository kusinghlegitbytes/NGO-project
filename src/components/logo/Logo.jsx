import "./logo.css"
import { useContext } from "react"
import AppContext from "../../ctx/AppContext"
import useCurrentURL from "../../hooks/useCurrentURL"
const Logo = () => {
  const {animateSearchButton}=useContext(AppContext)
  const currentURL=useCurrentURL()
  return <div className={`py-10`}>
    <img src="/assets/imgs/logo.png" className={`w-3/5 sm:w-96 md:w-96 lg:w-96 xl:w-96 h-56 mx-auto ${currentURL==="/search-results"?'animate-logo':''}`}/>
  </div>
}
export default Logo
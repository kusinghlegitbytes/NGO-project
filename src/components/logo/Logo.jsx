import { useState } from "react"
import "./logo.css"
import { useContext } from "react"
import AppContext from "../../ctx/AppContext"
const Logo = () => {
  const {animateSearchButton}=useContext(AppContext)
  return <div className={`py-10`}>
    <img src="/assets/imgs/logo.png" className={`w-96 h-56 mx-auto ${animateSearchButton?'animate-logo':''}`}/>
  </div>
}
export default Logo